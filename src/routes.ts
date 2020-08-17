import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
const router = Router();

router.get("/", (req, res) => res.send(201).json({ message: "ok" }));
router.post("/users", (req, res) => {
  return createUserController.handle(req, res);
});

export { router };
