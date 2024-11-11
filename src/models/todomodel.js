import mongoose from "mongoose";

const { Schema } = mongoose;
const todoSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
});

export const todos = mongoose.model("todos", todoSchema);


