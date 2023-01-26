import { UserRepository } from "../../repositories/user-repository";
import { AuthenticationError, UserInputError } from "apollo-server";
import { validate } from "class-validator";
import { LoginDTO } from "./DTOs/login";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const userRepository = new UserRepository();

export const login = async (_, { data }) => {
  const userInfo = new LoginDTO();
  userInfo.email = data?.email;
  userInfo.password = data?.password;
  const dataIsCorrect = await validate(userInfo);
  if (dataIsCorrect.length > 0) {
    throw new UserInputError(
      dataIsCorrect
        .map((errors) => {
          return JSON.stringify(errors.constraints);
        })
        .toString()
    );
  }
  const user = await userRepository.findByEmail(userInfo.email);
  if (!user) {
    throw new AuthenticationError("Invalid email or password");
  }
  const passwordIsCorrect = await bcryptjs.compare(
    userInfo.password,
    user.password
  );
  if (!passwordIsCorrect) {
    throw new AuthenticationError("Invalid email or password");
  }
  const token = jwt.sign(
    { _id: user._id, name: user.name },
    process.env.SECRET,
    { expiresIn: "7d" }
  );

  return { token: token };
};
