import { UserRepository } from "../../repositories/user-repository";
import { ValidationError } from "apollo-server";
import { CreateUserDTO } from "./DTOs/create-user";
import { validate } from "class-validator";
import bcryptjs from "bcryptjs";
const userRepository = new UserRepository();
export const createUser = async (_, { data }) => {
  const userDTO = new CreateUserDTO();
  userDTO.name = data?.name;
  userDTO.password = data?.password;
  userDTO.email = data?.email;

  const isValid = await validate(userDTO);
  if (isValid.length > 0) {
    throw new ValidationError(
      isValid
        .map((errors) => {
          return JSON.stringify(errors.constraints);
        })
        .toString()
    );
  }

  const userAlreadyExist = await userRepository.findByEmail(data.email);
  if (userAlreadyExist) {
    throw new ValidationError("Email already used");
  }
  const hashedPassword = await bcryptjs.hash(userDTO.password, 10);
  const user = await userRepository.createUser({
    ...userDTO,
    password: hashedPassword,
  });

  return { name: user.name, email: user.email };
};
