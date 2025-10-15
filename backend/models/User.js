const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number']
  },
  registrationNumber: {
    type: String,
    required: [true, 'Registration number is required'],
    unique: true,
    trim: true,
    uppercase: true
  },
  branch: {
    type: String,
    required: [true, 'Branch is required'],
    enum: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Electronics and Communication Engineering', 'Computer Science and Engineering', 'Chemical Engineering', 'Mining Engineering', 'Production Engineering'],
    trim: true
  },
  college: {
    type: String,
    required: [true, 'College name is required'],
    default: 'BIT Sindri',
    trim: true
  },
  year: {
    type: String,
    required: [true, 'Year of study is required'],
    enum: ['1st Year', '2nd Year', '3rd Year', '4th Year'],
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  registeredAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for faster queries
userSchema.index({ email: 1, registrationNumber: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;
