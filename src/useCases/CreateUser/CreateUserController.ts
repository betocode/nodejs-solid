import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
      });
      return response.status(201).send({ message: "user created" });
    } catch (ex) {
      return response
        .status(401)
        .json({ mesage: ex.message || "Unexpected error." });
    }
  }
}
