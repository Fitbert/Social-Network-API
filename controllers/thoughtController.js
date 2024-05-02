const Thought = require('../models/thought');
const User = require('../models/user');

const thoughtController = {
  // Get thought by ID
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findById(req.params.id);
      res.json(thought);
    } catch (err) {
      res.status(404).json(err);
    }
  },

  // Create thought and associate it with a user
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findById(req.params.userId);
      user.thoughts.push(thought._id);
      await user.save();
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Update thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Delete thought and remove it from user's thoughts
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.id);
      const user = await User.findById(req.params.userId);
      user.thoughts = user.thoughts.filter(thoughtId => thoughtId.toString() !== req.params.id);
      await user.save();
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Add reaction to thought
  async addReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      thought.reactions.push(req.body);
      await thought.save();
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Remove reaction from thought
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      thought.reactions = thought.reactions.filter(reaction => reaction._id.toString() !== req.params.reactionId);
      await thought.save();
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

module.exports = thoughtController;
