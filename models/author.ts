import mongoose, { Schema, model } from "mongoose";

export const authorShema = new Schema({
  name: String,
  age: String,
});

export const Author = model("Author", authorShema);
