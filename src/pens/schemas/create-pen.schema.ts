import Joi from 'joi';

export const CreatePenSchema = Joi.object({
  brand: Joi.string().required(),
  model: Joi.string().required(),
  color: Joi.string().required(),
});
