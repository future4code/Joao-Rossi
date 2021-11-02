import { app , server } from "./app";
import {userRouter} from './routes/userRouters'

/* USER */
app.use("/users", userRouter)
