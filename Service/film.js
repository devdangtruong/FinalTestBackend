import { filmModel } from "../Model/film.js";

export const postInformationFilm = async (req, res, next) => {
  const film = await filmModel.create({
    name: req.body.name,
    time: req.body.time,
    year: req.body.year,
    image: req.body.image,
    introduce: req.body.introduce,
  });
  res.status(200).send(film);
};

export const getFilm = async (req, res, next) => {
  const film = await filmModel.find();
  res.status(200).send(film);
};

export const deleteFilm = async (req, res, next) => {
  const film = await filmModel.findByIdAndDelete(req.params.id);
  res.status(200).send(film);
};
