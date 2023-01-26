import { UserRepository } from "../../repositories/user-repository";
import { AuthenticationError, ValidationError } from "apollo-server";

const userRepository = new UserRepository();
export const getUser = async (_, __, { userId }) => {
  if (!userId) {
    throw new AuthenticationError("Should be logged");
  }
  const user = await userRepository.findById(userId);
  if (!user) {
    throw new ValidationError("User doesn't exist");
  }
  return { email: user.email, name: user.name, _id: user._id };
};
