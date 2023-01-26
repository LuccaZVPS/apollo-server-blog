import { UserRepository } from "../../repositories/user-repository";
import { ValidationError } from "apollo-server";

const userRepository = new UserRepository();
export const getUser = async (_, { id }) => {
  const user = await userRepository.findById(id);
  if (!user) {
    throw new ValidationError("User doesn't exist");
  }
  return { email: user.email, name: user.name, _id: user._id };
};
