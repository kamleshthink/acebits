const mongoose = require('mongoose');

const userCommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  isRead: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['pending', 'replied', 'resolved'],
    default: 'pending'
  }
}, {
  timestamps: true
});

// Index for faster queries
userCommentSchema.index({ email: 1, submittedAt: -1 });

const UserComment = mongoose.model('UserComment', userCommentSchema);

module.exports = UserComment;
