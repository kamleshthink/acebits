const express = require('express');
const router = express.Router();
const {
  submitContactForm,
  getAllComments,
  getCommentById,
  updateCommentStatus,
  getUnreadCount
} = require('../controllers/contactController');

// POST /api/contact - Submit contact form
router.post('/', submitContactForm);

// GET /api/contact - Get all comments
router.get('/', getAllComments);

// GET /api/contact/unread-count - Get unread comments count
router.get('/unread-count', getUnreadCount);

// GET /api/contact/:id - Get comment by ID
router.get('/:id', getCommentById);

// PUT /api/contact/:id - Update comment status
router.put('/:id', updateCommentStatus);

module.exports = router;
