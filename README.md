# onion-architecture

# Project Overview

This project is a simple Express.js application that demonstrates the use of Onion/Clean Architecture principles to organize the codebase. The application allows users to be created and saved to a database, and it also simulates sending a welcome email upon user creation.

## Purpose

The purpose of this project is to showcase how Onion/Clean Architecture can be implemented in a Node.js application. The architecture separates concerns into different layers, making the codebase modular, maintainable, and scalable. It allows for easy swapping of components without affecting the rest of the application.

## Installation

Before running the application, make sure you have Node.js and npm (Node Package Manager) installed on your system.

1. Clone this repository to your local machine.

```bash
git clone <repository_url>
```

2. Navigate to the project directory.

```bash
cd project
```

3. Install the dependencies.

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Add the following configuration settings to the `.env` file, and adjust them as needed:

```dotenv
DB_USER=<your_database_username>
DB_PASSWORD=<your_database_password>
DB_HOST=<your_database_host>
DB_PORT=<your_database_port>
DB=<your_database_name>
PORT=<port_number_for_the_server>
```

## Usage

To run the application, use the following command:

```bash
npm start
```

The server will start and listen on the specified port (default is 3000).

## Endpoints

- **POST /users**: Create a new user. Send a JSON payload containing `"name"` and `"email"` to this endpoint. The server will create the user, save it to the database, and log a message to the console indicating that a welcome email is being sent.

## Dependencies

The project uses the following dependencies:

- `express`: Web framework for Node.js.
- `pg`: PostgreSQL client for Node.js.
- `dotenv`: Loads environment variables from a `.env` file.

## File Structure

```
project/
|-- src/
|   |-- application/
|   |   |-- useCases/
|   |   |   |-- createUser.js
|   |   |-- interfaces/
|   |   |   |-- userRepository.js
|   |-- domain/
|   |   |-- user.js
|   |-- infrastructure/
|   |   |-- userDatabaseRepository.js
|   |   |-- emailService.js
|   |-- presentation/
|   |   |-- routes.js
|   |   |-- controllers/
|   |   |   |-- userController.js
|   |   |-- server.js
|-- .env
|-- package.json
|-- README.md
```


## Author
Ahmed Medhat
