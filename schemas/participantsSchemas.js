import Joi from 'joi';

const createEventSchema = Joi.object({
  fullName: Joi.string().required().messages({
    'any.required': `"title" must be exist`,
    'string.base': `"title" must be string`,
  }),
  email: Joi.string().required(),
});

export default createEventSchema;
