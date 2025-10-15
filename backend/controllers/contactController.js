const UserComment = require('../models/UserComment');

// Submit contact form
const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate all fields are present
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Create new contact form submission
    const userComment = await UserComment.create({
      name,
      email,
      subject,
      message
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: {
        id: userComment._id,
        name: userComment.name,
        email: userComment.email,
        subject: userComment.subject,
        submittedAt: userComment.submittedAt
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

// Get all contact form submissions
const getAllComments = async (req, res) => {
  try {
    const comments = await UserComment.find()
      .select('-__v')
      .sort({ submittedAt: -1 });

    res.status(200).json({
      success: true,
      count: comments.length,
      data: comments
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching comments'
    });
  }
};

// Get comment by ID
const getCommentById = async (req, res) => {
  try {
    const comment = await UserComment.findById(req.params.id).select('-__v');

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found'
      });
    }

    res.status(200).json({
      success: true,
      data: comment
    });
  } catch (error) {
    console.error('Error fetching comment:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching comment'
    });
  }
};

// Update comment status (for admin)
const updateCommentStatus = async (req, res) => {
  try {
    const { status, isRead } = req.body;

    const comment = await UserComment.findByIdAndUpdate(
      req.params.id,
      { status, isRead },
      { new: true, runValidators: true }
    );

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Comment status updated',
      data: comment
    });
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating comment'
    });
  }
};

// Get unread comments count
const getUnreadCount = async (req, res) => {
  try {
    const count = await UserComment.countDocuments({ isRead: false });

    res.status(200).json({
      success: true,
      unreadCount: count
    });
  } catch (error) {
    console.error('Error fetching unread count:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching unread count'
    });
  }
};

module.exports = {
  submitContactForm,
  getAllComments,
  getCommentById,
  updateCommentStatus,
  getUnreadCount
};
