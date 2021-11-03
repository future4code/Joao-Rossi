import { app , server } from "./app";
import {userRouter} from './routes/userRouters'
import {postRouter} from './routes/postRouters'

/* USER */
app.use("/users", userRouter)

/* POST */
app.use('/post', postRouter)