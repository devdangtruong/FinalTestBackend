import express from "express";
import { tryCatchFn } from "../utils/trycatch.js";
import { deleteFilm, getFilm, postInformationFilm } from "../Service/film.js";

const filmController = express.Router();

filmController.post("/", tryCatchFn(postInformationFilm));
filmController.get("/", tryCatchFn(getFilm));
filmController.delete("/:id", tryCatchFn(deleteFilm));

export { filmController };
