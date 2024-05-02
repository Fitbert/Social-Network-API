const router = require('express').Router();
const { getUsers, getSingleUser, createUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController');

// GET all users
router.route('/').get(getUsers).post(createUser);

// GET a single user by _id and DELETE a user by _id
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// Add and remove friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
