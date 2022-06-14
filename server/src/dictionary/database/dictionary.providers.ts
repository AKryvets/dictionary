import { Mongoose } from "mongoose";
import { DictionarySchema } from "./dictionary.schema";

export const dictionaryProviders = [
  {
    provide: "DICTIONARY_MODEL",
    useFactory: (mongoose: Mongoose) =>
      mongoose.model("Dictionary", DictionarySchema),
    inject: ["DATABASE_CONNECTION"],
  },
];
