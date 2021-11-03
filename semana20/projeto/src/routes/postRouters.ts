import express from "express";
import PostController from "../controller/Posts/PostController";

export const postRouter = express.Router();
const postController = new PostController();
postRouter.post("/create", postController.create);
postRouter.post("/:id");
