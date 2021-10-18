import { app } from './app';
import createProduct from './endpoints/products/createProduct';
import getAllProducts from './endpoints/products/getAllProducts';
import createUser from "./endpoints/users/createUser";
import getAllUsers from "./endpoints/users/getAllUsers";

app.get('/users', getAllUsers)
app.post('/users', createUser)
app.post('/products', createProduct)
app.get('/products', getAllProducts)