const express = require('express');
const router = express.Router();
const {
  registerUser,
  getAllUsers,
  getUserById,
  getUserByRegNo
} = require('../controllers/userController');

// POST /api/users/register - Register a new user
router.post('/register', registerUser);

// GET /api/users - Get all users
router.get('/', getAllUsers);

// GET /api/users/:id - Get user by ID
router.get('/:id', getUserById);

// GET /api/users/regno/:regNo - Get user by registration number
router.get('/regno/:regNo', getUserByRegNo);

module.exports = router;
