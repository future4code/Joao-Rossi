import { app } from './app';
import createProduct from './endpoints/products/createProduct';
import createUser from "./endpoints/users/createUser";
import getAllUsers from "./endpoints/users/getAllUsers";

app.get('/users', getAllUsers)
app.post('/users', createUser)
app.post('/products', createProduct)