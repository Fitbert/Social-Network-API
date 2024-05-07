const router = require('express').Router(); // Change .router() to .Router()
const userRoutes = require('./userRoutes'); // Corrected file path
const thoughtRoutes = require('./thoughtRoutes');
//localhost:3001/api/users/
router.use("/users", userRoutes); // Change "user" to "users" for consistency

//localhost:3001/api/thoughts
router.use("/thoughts", thoughtRoutes);

module.exports = router;
