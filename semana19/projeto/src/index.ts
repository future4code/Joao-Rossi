import { app } from "./services/app";
import { createUser } from "./endpoints/users/createUser";

app.get("/users", createUser);
