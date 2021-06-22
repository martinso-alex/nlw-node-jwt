import { Request, Response } from "express";
import { UserService } from "../services/UserService";

class UserController {
  static async create(req: Request, res: Response) {
    const { name, email, admin } = req.body;

    const userService = new UserService();

    const user = await userService.createUser({ name, email, admin });

    return res.json(user);
  }
}

export { UserController };
