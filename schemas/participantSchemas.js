import Joi from 'joi';

const emailRegexp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

const createParticipantSchema = Joi.object({
  fullName: Joi.string().min(3).max(100).required().messages({
    'string.base': 'Full Name should be a type of string',
    'string.empty': 'Full Name cannot be empty',
    'string.min': 'Full Name should have a minimum length of {#limit}',
    'string.max': 'Full Name should have a maximum length of {#limit}',
    'any.required': 'Full Name is required',
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    'string.base': 'Email should be a type of string',
    'string.pattern.base': 'Email must be a valid email',
    'any.required': 'Email is required',
  }),
  birthDay: Joi.date().iso().required().messages({
    'date.base': 'Date of Birth should be a valid date',
    'date.format': 'Date of Birth should be in ISO format',
    'any.required': 'Date of Birth is required',
  }),
  referral: Joi.string()
    .valid('Social media', 'Friends', 'Found myself')
    .required()
    .messages({
      'any.only':
        'Referral must be one of Social media, Friends, or Found myself',
      'any.required': 'Referral is required',
    }),
});

export default createParticipantSchema;
