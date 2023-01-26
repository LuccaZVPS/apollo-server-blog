import { User } from "../domain/user";
import { userModel } from "../db/user-schema";
import { CreateUserDTO } from "../use-cases/users/DTOs/create-user";
import mongoose, { isValidObjectId } from "mongoose";
export class UserRepository {
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await userModel.findOne({ email });
    if (user) {
      return user;
    }
  }
  async findById(id: string): Promise<User | undefined> {
    const isValidId = isValidObjectId(id);
    if (!isValidId) {
      return;
    }
    const user = await userModel.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    if (user) {
      return user;
    }
  }

  async createUser(data: CreateUserDTO): Promise<User | undefined> {
    const user = await userModel.create({
      email: data.email,
      name: data.name,
      password: data.password,
    });

    if (user) {
      return user;
    }
  }
}
