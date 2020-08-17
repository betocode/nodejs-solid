import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MemoryUserRepository } from "../../repositories/implementations/MemoryUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapProvider = new MailtrapMailProvider();
const memoryUserRepository = new MemoryUserRepository();

const createUserUseCase = new CreateUserUseCase(
  memoryUserRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
