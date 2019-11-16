const joi = require('@hapi/joi');

const driverIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}/);
const driverNameSchema = joi.string().min(3).max(24);
const driverEmailSchema = joi.string().email();
const driverUrlAvatarSchema = joi.string().uri();
const driverCarSchema = joi.object().keys({
  'color': joi.string(),
  'make': joi.string().required(),
  'model': joi.string().required(),
  'plates': joi.string().alphanum().uppercase().length(6)
});
const driverCalifSchemaObject = joi.object().keys({
  'tripID': tripIdSchema.required(),
  'value': joi.number().integer().min(1).max(5),
});
const driverCalifSchema = joi.array(driverCalifSchemaObject);

const createDriverSchema = {
  'first_name': driverNameSchema.required(),
  'last_name': driverIdSchema.required(),
  'email': driverEmailSchema.required(),
  'passport': joi.string().required(),
  'avatar': driverUrlAvatarSchema,
  'car': driverCarSchema.required(),

  'calif': driverCalifSchema,
  'rank': joi.number(),
  // 'coord': {
  //   'lat': 19.3163497,
  //   'lng': -99.0606105
  // },
  'available': joi.boolean(),
};

const updateDriverSchema = {

};

module.exports = {
  driverIdSchema,
  createDriverSchema,
  updateDriverSchema,
};
