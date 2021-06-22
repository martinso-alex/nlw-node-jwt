import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IUser {
  name: string;
  email: string;
  admin?: boolean;
}

class UserService {
  async createUser({ name, email, admin }: IUser) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) throw new Error("E-mail is empty.");

    const userExists = await userRepository.findOne({ email });

    if (userExists) throw new Error("User already exists");

    const user = userRepository.create({
      name,
      email,
      admin,
    });

    await userRepository.save(user);

    return user;
  }
}

export { UserService };
