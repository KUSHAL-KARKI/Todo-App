import { todos } from "../models/todomodel.js";

export const getTodo = (req, res) => {
    todos.find()
        .then((result) => {
            res.render("todo", { todos: result });
        })
        .catch((err) => {
            console.log(err);
        });
};

export const postTodo = (req, res) => {
    const newTodo = new todos({
        item: req.body.item,
    });
    newTodo.save()
        .then((result) => {
            res.redirect("/todo");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Server Error");
        });
};

export const deleteTodo = (req, res) => {
    todos.deleteOne({ _id: req.params.id })
        .then((result) => {
            if (result.deletedCount > 0) {
                res.json({ redirect: "/" });
            } else {
                res.status(404).json({ error: "Todo not found" });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Failed to delete the item" });
        });
};
