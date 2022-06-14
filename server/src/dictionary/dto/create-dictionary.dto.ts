import { IsString } from "class-validator";
import { Word } from "../database/dictionary.schema";

export class CreateDictionaryDto {
  @IsString()
  title: string;

  @IsString()
  creatorId?: string;

  @IsString()
  words?: Word[];
}
