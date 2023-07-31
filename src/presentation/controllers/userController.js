// src/presentation/controllers/userController.js
const { CreateUserUseCase } = require('../../application/useCases/createUser');

class UserController {
  constructor(createUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async createUser(req, res) {
    try {
      const userData = req.body;
      const newUser = await this.createUserUseCase.execute(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
  }
}

module.exports = { UserController };
