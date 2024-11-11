import express from "express";
import { getTodo, postTodo, deleteTodo } from "../controllers/todoController.js";
const router = express.Router();

router.get("/todo",getTodo);
router.post("/todo", postTodo);
router.delete("/todo/:id", deleteTodo);
export default router;