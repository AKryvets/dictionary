import * as Joi from "@hapi/joi";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { Word } from "../database/dictionary.schema";

export const UpdateDictionarySchema = Joi.object().keys({
  title: Joi.string(),
  creatorId: Joi.string(),
  words: Joi.array().items(Joi.object()),
});

export class UpdateDictionaryDto {
  @ApiPropertyOptional({ default: "" })
  title?: string;

  @ApiPropertyOptional({ default: "" })
  creatorId?: string;

  @ApiPropertyOptional({ default: "" })
  words?: Word[];
}
