import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as UserController from "./controllers/UserController.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const URL = process.env.VITE_PROD_BASE_URL;
const port = 3000;
app.post("/users", UserController.add);
app.get("/users", UserController.getAll);
app.delete("/users/:id", UserController.remove);
app.put("/users/:id", UserController.update);

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`Сервер запущен на порту ${port}`);
});

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`DB connection error: ${err}`));
