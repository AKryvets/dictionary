import * as Joi from "@hapi/joi";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { Word } from "../database/dictionary.schema";

export const UpdateWordsSchema = Joi.object().keys({
  words: Joi.array(
    Joi.object().keys({
      origin: Joi.string(),
      translations: Joi.string(),
    })
  ),
});

export class UpdateWordsDto {
  @ApiPropertyOptional({ default: "" })
  words?: Word[];
}
