const MongoLib = require('../lib/mongo');

const bcrypr = require('bcrypt');

class UserServices {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoLib();
  }

  async getUserById({ userId }) {
    const user = await this.mongoDB.get(this.collection, userId);
    return user || {};
  };

  async getUser({ email }) {
    const user = await this.mongoDB.getAll(this.collection, { email });
    return user || {};
  };

  async createUser({ user }) {
    const { first_name, last_name, email, password, isAdmin } = user;
    const hashedPassword = await bcrypr.hash(password, 10);

    const createdUserId = await this.mongoDB.create(this.collection, {
      first_name,
      last_name,
      email,
      'password': hashedPassword,
      'isAdmin': Boolean(isAdmin),
    });
    return createdUserId;
  }

  async updateUser({ userId, user } = {}) {
    const updatedUserId = await this.mongoDB.update(this.collection, userId, user);
    return updatedUserId;
  }

  async deleteUser({ userId }) {
    const deletedUserId = await this.mongoDB.delete(this.collection, userId);
    return deletedUserId;
  };

};

module.exports = UserServices;
