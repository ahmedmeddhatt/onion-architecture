// src/application/useCases/createUser.js
const { User } = require('../../domain/user');

class CreateUserUseCase {
  constructor(userRepository, emailService) {
    this.userRepository = userRepository;
    this.emailService = emailService;
  }

  async execute(userData) {
    const newUser = new User(userData);
    const savedUser = await this.userRepository.save(newUser);

    // Assuming emailService.sendWelcomeEmail() is defined to send the welcome email.
    await this.emailService.sendWelcomeEmail(savedUser.email);

    return savedUser;
  }
}

module.exports = { CreateUserUseCase };
