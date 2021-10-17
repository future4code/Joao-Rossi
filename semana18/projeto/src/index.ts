import { app } from './app';
import createUser from "./endpoints/users/createUser";
import getAllUsers from "./endpoints/users/getAllUsers";

app.get('/users', getAllUsers)
app.post('/users', createUser)