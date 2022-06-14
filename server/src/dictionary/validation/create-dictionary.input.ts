import * as Joi from "@hapi/joi";

export const CreateDictionarySchema = Joi.object().keys({
  title: Joi.string().required(),
});
