const joi = require('@hapi/joi');

const driverIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}/);
const driverNameSchema = joi.string().min(3).max(24);
const driverEmailSchema = joi.string().email();
const driverUrlAvatarSchema = joi.string().uri();

const createDriverSchema = {
  'first_name': driverNameSchema.required(),
  'last_name': driverIdSchema.required(),
  'email': driverEmailSchema.required(),
  'avatar': driverUrlAvatarSchema,
  'car': [
    {
      'color': 'Green',
      'make': 'Chevrolet',
      'model': 'Silverado 1500',
      'plates': 'OPV5601'
    }
  ],
  'calif': [
    {
      'tripID': 'ff5c4Ee6539e71b2f5678d6f',
      'value': 5
    },
    {
      'tripID': '45fef88f5fed4e1ed50eff62',
      'value': 3
    },
    {
      'tripID': '387c7f66076ff533e457f45e',
      'value': 3
    }
  ],
  'rank': 3.6666666667,
  'coord': {
    'lat': 19.3163497,
    'lng': -99.0606105
  },
  'available': true

};

const updateDriverSchema = {

};

module.exports = {
  driverIdSchema,
  createDriverSchema,
  updateDriverSchema,
};
