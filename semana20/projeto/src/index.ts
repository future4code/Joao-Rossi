import { app , server } from "./app";
import {userRouter} from './routes/userRouters'
import {postRouter} from './routes/postRouters'
import moment from "moment";

/* USER */
app.use("/users", userRouter)

/* POST */
app.use('/post', postRouter) 
