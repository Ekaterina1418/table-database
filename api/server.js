import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as UserController from "./controllers/UserController.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Настройка CORS
app.use(
  cors({
    origin: "https://table-database.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

const URL = "mongodb+srv://eolejnik:Eg_180587@cluster0.3xw5xo3.mongodb.net/";
const port = process.env.PORT || 3000;

app.post("/users", UserController.add);
app.get("/users", UserController.getAll);
app.delete("/users/:id", UserController.remove);
app.put("/users/:id", UserController.update);

app.listen(port, (err) => {
  if (err) {
    console.error(`Error starting server: ${err}`);
  } else {
    console.log(`Server running on port ${port}`);
  }
});

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(`DB connection error: ${err}`));
