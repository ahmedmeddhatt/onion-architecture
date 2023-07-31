// src/domain/user.js
class User {
    constructor(userData) {
      this.name = userData.name;
      this.email = userData.email;
      // Additional properties and validation can be added here.
    }
  }
  
  module.exports = { User };
  