// controllers/thoughtController.js
const { Thought, User } = require('../models');

const thoughtController = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },

  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },

  async createThought(req, res) {
    try {
      const { userId, ...thoughtData } = req.body;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const thought = await Thought.create(thoughtData);
      user.thoughts.push(thought._id);
      await user.save();
      res.status(201).json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },

  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(updatedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },

  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!deletedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      // Remove thought from associated user's thoughts array
      const user = await User.findById(deletedThought.userId);
      user.thoughts = user.thoughts.filter(thoughtId => thoughtId.toString() !== req.params.thoughtId);
      await user.save();
      res.json({ message: 'Thought deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },

  async createReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      thought.reactions.push(req.body);
      await thought.save();
      res.status(201).json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },

  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      thought.reactions = thought.reactions.filter(reaction => reaction._id.toString() !== req.params.reactionId);
      await thought.save();
      res.json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
};

module.exports = thoughtController;

