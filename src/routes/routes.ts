import { Router } from "express";
import { createUser, getUsers } from "../controller/UserController";
import { Auth } from "../controller/AuthController";
import { AuthMiddleware } from "../middlewares/auth";

export const router = Router()

router.get('/users', AuthMiddleware, getUsers)
router.post('/create', createUser)
router.post('/auth', Auth)