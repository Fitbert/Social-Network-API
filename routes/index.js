const router = require('express').Router();
const apiRoutes = require('./api');
// const postRoutes = require('./api/postRoutes');
// const commentRoutes = require('./api/commentRoutes');

// Import routes from API folders

// Define routes
//localhost:3001/api
router.use('/api', apiRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;