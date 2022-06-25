import mongoose, { Schema, model } from "mongoose";

const bookShema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

export const Book = model("Book", bookShema);
