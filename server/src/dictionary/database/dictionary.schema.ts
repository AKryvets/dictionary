import * as mongoose from "mongoose";
import { Document } from "mongoose";

export const DictionarySchema = new mongoose.Schema(
  {
    title: String,
    words: [Object],
    creatorId: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
);

export interface Word extends Document {
  origin: string;
  translation: string;
}

export interface Dictionary extends Document {
  title: string;
  creatorId: string;
  words?: Word[];
}

DictionarySchema.virtual("author", {
  ref: "Users",
  localField: "creatorId",
  foreignField: "_id",
  justOne: true,
});

DictionarySchema.set("toJSON", {
  virtuals: true,
  getters: true,
});
