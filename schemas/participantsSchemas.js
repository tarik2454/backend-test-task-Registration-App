import Joi from 'joi';

const createEventSchema = Joi.object({
  // title: Joi.string().required().messages({
  //   'any.required': `"title" must be exist`,
  //   'string.base': `"title" must be string`,
  // }),
  // description: Joi.string().required(),
});

export default createEventSchema;
