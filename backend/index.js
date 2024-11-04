import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({});

import connectDB from "./utils/DB.js";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http//localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
// const PORT=3000;

const PORT = process.env.PORT || 3000;

//api's

app.listen(PORT, () => {
  connectDB();
  console.log(`server running at port ${PORT}`);
});
