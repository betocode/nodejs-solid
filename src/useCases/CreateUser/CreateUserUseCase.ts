import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IEmailProvider";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );
    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
    // await this.mailProvider.sendMail({
    //   to: {
    //     name: data.name,
    //     email: data.email,
    //   },
    //   from: {
    //     name: "Roberto",
    //     email: "roberto@robertotesteeeee.com",
    //   },
    //   subject: "Welcome to my new app",
    //   body: "<p>You already can login in our app!</p>",
    // });
  }
}
