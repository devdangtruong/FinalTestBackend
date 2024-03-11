import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { filmController } from "./Controller/film.js";
import cors from "cors";
dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());
server.use("/film", filmController);

mongoose.connect(process.env.MONGODB).then(
  server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  })
);
