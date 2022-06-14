import * as mongoose from "mongoose";
import validator from "validator";
import { Document } from "mongoose";

export const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: (value: string) => {
      return validator.isEmail(value);
    },
  },
  firstName: String,
  lastName: String,
  hash: String,
});

export interface User extends Document {
  readonly _id: string;
  readonly email: string;
  readonly hash: string;
  readonly lastName: string;
  readonly firstName: string;
}
