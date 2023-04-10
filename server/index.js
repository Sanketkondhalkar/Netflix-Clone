import express from "express";
import connect from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
const app = express();
connect();

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRoutes);

app.listen(4000);
