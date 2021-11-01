import { app , server } from "./app";
import UserController from "./controller/UserController";

/* USER */
const userController = new UserController();
app.post("/users/signup", userController.signUp)
app.post('/users/login', userController.login)