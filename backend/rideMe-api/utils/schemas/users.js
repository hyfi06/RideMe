const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserSchema = {
  'first_name': joi.string().max(100).required(),
  'last_name': joi.string().max(100).required(),
  'email': joi.string().email().required(),
  'passport': joi.string().required(),
};

module.exports = {
  userIdSchema,
  createUserSchema
};
