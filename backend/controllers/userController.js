const User = require('../models/User');

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { name, email, phone, registrationNumber, branch, college, year, address } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { registrationNumber }]
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({
          success: false,
          message: 'Email already registered'
        });
      }
      if (existingUser.registrationNumber === registrationNumber) {
        return res.status(400).json({
          success: false,
          message: 'Registration number already registered'
        });
      }
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      phone,
      registrationNumber,
      branch,
      college: college || 'BIT Sindri',
      year,
      address
    });

    res.status(201).json({
      success: true,
      message: 'Registration successful! Welcome to ACE BITS Community',
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        registrationNumber: user.registrationNumber,
        branch: user.branch,
        registeredAt: user.registeredAt
      }
    });

  } catch (error) {
    console.error('Registration error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        success: false,
        message: `${field} already exists`
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ isActive: true })
      .select('-__v')
      .sort({ registeredAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching users'
    });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-__v');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user'
    });
  }
};

// Get user by registration number
const getUserByRegNo = async (req, res) => {
  try {
    const user = await User.findOne({
      registrationNumber: req.params.regNo.toUpperCase()
    }).select('-__v');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user'
    });
  }
};

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
  getUserByRegNo
};
