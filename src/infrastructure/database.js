const pg = require('pg');
require('dotenv').config();

// Set up the database connection
const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB
});

// Set the password separately
if (process.env.DB_PASSWORD) {
  pool.options.password = process.env.DB_PASSWORD.trim();
} else {
  console.log('not found');
}
// Check the database connection
pool.connect((error, client, release) => {
  if (error) {
    console.error('Error connecting to the database:', error);
  } else {
    console.log('Database connection successful');
    release(); // Release the client back to the pool
  }
});

module.exports = pool;
