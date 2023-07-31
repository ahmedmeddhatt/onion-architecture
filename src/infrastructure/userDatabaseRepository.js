const pool = require('./database'); 
const { UserRepository } = require('../application/interfaces/userRepository');


class UserDatabaseRepository extends UserRepository {
  async save(user) {
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
    const values = [user.name, user.email];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error saving user:', error);
      return null;
    }
  }



  async findAll() {
    const query = 'SELECT * FROM users';

    try {
      const result = await pool.query(query);
      return result.rows || null;
    } catch (error) {
      console.error('Error finding users:', error);
      return null;
    }
  }



  async findById(userId) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [userId];

    try {
      const result = await pool.query(query, values);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error finding user by ID:', error);
      return null;
    }
  }



  async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];

    try {
      const result = await pool.query(query, values);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error finding user by email:', error);
      return null;
    }
  }



  async update(userId, updates) {
    const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *';
    const values = [updates.name, updates.email, userId];

    try {
      const result = await pool.query(query, values);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error updating user:', error);
      return null;
    }
  }



  async delete(userId) {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const values = [userId];

    try {
      const result = await pool.query(query, values);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error deleting user:', error);
      return null;
    }
  }
}

module.exports = new UserDatabaseRepository();
