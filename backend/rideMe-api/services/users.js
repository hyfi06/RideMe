const MongoLib = require('../lib/mongo');

const bcrypr = require('bcrypt');

class UserServices {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoLib();
  }

  async getUser({ userId }) {
    const user = await this.mongoDB.get(this.collection, userId);
    return user || {};
  };

  async createUser({ user }) {
    const createdUserId = await this.mongoDB.create(this.collection, user);
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
