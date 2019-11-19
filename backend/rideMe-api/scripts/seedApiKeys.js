//
const crypto = require('crypto');
const MongoLib = require('../lib/mongo');

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'read:trips',
  'update:trips',
  'create:drivers',
  'update:drivers',
  'delete:drivers',
];

const userScopes = [
  'signin:auth',
  'signup:auth',
  'read:trips',
  'create:trips',
  'update:trips',
  'read:drivers',
];

const driverScopes = [
  'signin:auth',
  'signup:auth',
  'read:trips',
  'update:drivers',
];

function generateRandomToken() {
  const buffer = crypto.randomBytes(32);
  return buffer.toString('hex');
}

const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes,
  },
  {
    token: generateRandomToken(),
    scopes: userScopes,
  },
  {
    token: generateRandomToken(),
    scopes: driverScopes,
  },
];

async function seedApiKeys() {
  try {
    const mongoDB = new MongoLib();

    const promises = apiKeys.map(async (apiKey) => {
      await mongoDB.create('api-keys', apiKey);
    });

    await Promise.all(promises).then((res) => console.log(res));
    return process.exit(0);
  } catch (error) {
    console.log(error);
    return process.exit(1);
  }
}

seedApiKeys();
