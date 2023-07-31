const express = require('express');
const { userController } = require('./routes'); 
const app = express();

app.use(express.json());
require('dotenv').config();

// Define routes
app.post('/users', (req, res) => userController.createUser(req, res)); 

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

