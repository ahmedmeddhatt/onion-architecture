const { CreateUserUseCase } = require('../application/useCases/createUser');
const { EmailService } = require('../infrastructure/emailService');
const { UserController } = require('./controllers/userController');
const userRepository  = require('../infrastructure/userDatabaseRepository');

// Create instances of dependencies
const emailService = new EmailService();

const createUserUseCase = new CreateUserUseCase(userRepository, emailService);

// Create instances of controllers
const userController = new UserController(createUserUseCase);

module.exports = {
  userController,
};
