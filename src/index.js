import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";

configDotenv();
const app = express();

// setting view engine
app.set("view engine", "ejs");

// using static files and middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const dburi=process.env.DB_URI_LOCAL;
const port=process.env.PORT;

//mongoose connection
mongoose
  .connect(dburi)
  .then(
    app.listen(port, () =>
      console.log(`Server connected to database and running on port ${port}`)
    )
  )
  .catch((error) => console.log(error));

// routes to redirect to /todo
app.get("/", (req, res) => {
  res.redirect("/todo");
});
// using routes
app.use(routes);
