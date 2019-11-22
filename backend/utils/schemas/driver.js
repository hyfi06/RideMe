const joi = require('@hapi/joi');

const tripIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}/);
const driverIdSchema = joi.object().keys({
  'driverId': joi.string().regex(/^[0-9a-fA-F]{24}/),
});
const driverNameSchema = joi.string().min(3).max(24);
const driverEmailSchema = joi.string().email();
const driverUrlAvatarSchema = joi.string().uri();
const driverCarSchema = joi.object().keys({
  'color': joi.string(),
  'make': joi.string().required(),
  'model': joi.string().required(),
  'plates': joi.string().alphanum().uppercase().length(6),
});

const driverCalifSchemaObject = joi.object().keys({
  'tripID': tripIdSchema.required(),
  'value': joi.number().integer().min(1).max(5),
});

const driverCalifSchema = joi.array().items(driverCalifSchemaObject);

const latLngSchema = joi.object().keys({
  'lat': joi.number().required(),
  'lng': joi.number().required(),
});

const createDriverSchema = {
  'first_name': driverNameSchema.required(),
  'last_name': driverNameSchema.required(),
  'email': driverEmailSchema.required(),
  'passport': joi.string().required(),
  'avatar': driverUrlAvatarSchema,
  'car': driverCarSchema.required(),
  'calif': driverCalifSchema,
  'rank': joi.number(),
  'coord': latLngSchema,
  'available': joi.boolean(),
};

const updateDriverSchema = {
  'calif': driverCalifSchema,
  'rank': joi.number(),
  'coord': latLngSchema,
  'available': joi.boolean(),
};

const nearDriverSchema = joi.object({
  'lat': joi.number().required(),
  'lng': joi.number().required(),
  'range': joi.number(),
});

module.exports = {
  nearDriverSchema,
  driverIdSchema,
  createDriverSchema,
  updateDriverSchema,
};
