import mongoose from "mongoose";

const filmSchema = mongoose.Schema({
  name: String,
  time: Number,
  year: Number,
  image: String,
  introduce: String,
});

const filmModel = mongoose.model("information", filmSchema);

export { filmModel };
