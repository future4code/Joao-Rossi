import { app } from "./services/app";
import { createUser } from "./endpoints/users/createUser";

app.post("/users", createUser);
