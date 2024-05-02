const router = require('express').Router(); // Change .router() to .Router()
const userRoutes = require('./userRoutes'); // Corrected file path
const thoughtRoutes = require('./thoughtRoutes');

router.use("/users", userRoutes); // Change "user" to "users" for consistency
router.use("/thoughts", thoughtRoutes);

module.exports = router;
