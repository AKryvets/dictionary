import * as Joi from "@hapi/joi";
import { ApiPropertyOptional } from "@nestjs/swagger";

export const GetDictionarySchema = Joi.object().keys({
  id: Joi.string(),
});

export class GetDictionaryDto {
  @ApiPropertyOptional()
  readonly id: string;
}
