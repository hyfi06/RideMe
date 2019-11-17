const { config } = require('../../config/index');

const usersMock = [
  {
    'first_name': 'ROOT',
    'last_name': 'USER',
    'email': 'root@undefined.sh',
    'password': config.defaultAdminPassword,
    'isAdmin': true,
  },
  {
    'first_name': 'John',
    'last_name': 'Doe',
    'email': 'doe@undefined.sh',
    'password': config.defaultUserPassword,
  },
];

module.exports = usersMock;
