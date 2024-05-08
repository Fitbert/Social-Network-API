const { User, Thought } = require('../models');

// Get all users
const userController = {
  async getUsers(req, res) {
    try {
      const users = await User.find()
        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "friends", select: "-__v" });

      return res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "friends", select: "-__v" });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update user
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        { runValidators: true, new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'No user found with this id!' });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a user and associated thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
  
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
  
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      
      // Optionally, delete associated reactions
      // await Reaction.deleteMany({ thoughtId: { $in: user.thoughts } });
  
      return res.status(200).json({ message: 'User and associated thoughts are deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Add a friend
  async addFriend(req, res) {
    try {
      const { userId, friendId } = req.params;
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { friends: friendId } },
        { runValidators: true, new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'No user found with this id!' });
      }
      return res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a friend
  async deleteFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      if (!friend) {
        return res.status(404).json({ message: 'No user found with this id!' });
      }
      return res.status(200).json(friend);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

//exports
module.exports = userController;
