const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');
const commentRoutes = require('./api/commentRoutes');

// Import routes from API folders

// Define routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;