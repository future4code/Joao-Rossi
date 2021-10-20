import app from './app';
import { loginUser } from './endpoints/loginUser';
import {signUpUser} from './endpoints/singUpUser'

app.post('/user/signup', signUpUser);
app.post('/user/login', loginUser)
