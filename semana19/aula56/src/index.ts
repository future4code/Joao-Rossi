import app from './app';
import {signUpUser} from './endpoints/singUpUser'

app.post('/user/signup', signUpUser);
app.post('/user/login', loginUser)