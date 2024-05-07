const Thought = require('../models/thought');
const User = require('../models/user');

const thoughtController = {
  // Get all users
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  // Get thought by ID
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({_id: req.params.thoughtId});
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      return res.status(200).json(thought);
     
    } catch (err) {
      console.log(err);
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
      const thought = await Thought.findOneAndUpdate(req.params.id, req.body, { new: true });
      
      if (!thought) {
        console.log('Thought not found.');
        return res.status(404).json({ message: 'Thought not found.' });
      }
      
      console.log('Thought updated successfully:', thought);
      return res.json(thought);
    } catch (err) {
      console.error('Error updating thought:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  

  // Delete thought and remove it from user's thoughts
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({_id: req.params.thoughtId});
      const user = await User.findById(req.params.userId);
      user.thoughts = user.thoughts.filter(thoughtId => thoughtId.toString() !== req.params.id);
      await user.save();
      res.json(thought);
      return res.status(200).json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Add reaction to thought
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate({_id: req.params.thoughtId});
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
