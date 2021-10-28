import { app } from "./app";
import UserBusiness from "./business/UserBusiness";
import UserController from "./controller/UserController";

const userController = new UserController()

app.post("/user/signup", userController.signup)
app.post("/login", userController.login)