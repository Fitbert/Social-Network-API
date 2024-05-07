const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController.js');

// Get all thoughts and create a new thought
router.route('/')
    .get(getAllThoughts)
    .post(createThought);

// Get, update, and delete a thought by its ID
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// Add a reaction to a thought
router.post('/:thoughtId/reactions', addReaction);

// Remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;
