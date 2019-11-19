const joi = require('@hapi/joi');

const tripIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}/);

const addressSchema = joi.object().keys({
  'address': joi.string(),
});
const latLngSchema = joi.object().keys({
  'lat': joi.number().required(),
  'lng': joi.number().required(),
});
const locationSchema = joi.alternatives().try(addressSchema, latLngSchema);

const createTripSchema = joi.object({
  'origin': locationSchema.required(),
  'destination': locationSchema.required(),
});

const updateTripSchema = joi.object({
  'origin': locationSchema,
  'destination': locationSchema,
  'status': joi.string(),
});

module.exports = {
  tripIdSchema,
  locationSchema,
  createTripSchema,
  updateTripSchema,
};
