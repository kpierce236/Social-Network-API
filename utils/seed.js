// seedDB.js
require('dotenv').config()
const mongoose = require('mongoose');
const { userData, thoughtData } = require('./data');
const { User, Thought } = require('../models');
const { connect } = require('../config/connection'); // Import Mongoose connection configuration


const seedDatabase = async () => {
  try {
    // Connect to the database
    await mongoose.connect(process.env.MONGODB_URI);

    // Clear existing data
    await User.deleteMany();
    await Thought.deleteMany();

    // Seed users
    const createdUsers = await User.create(userData);

    // Seed thoughts
    for (let i = 0; i < thoughtData.length; i++) {
      const user = createdUsers.find(user => user.username === thoughtData[i].username);
      thoughtData[i].userId = user._id;
      const thought = await Thought.create(thoughtData[i]);
      user.thoughts.push(thought._id);
      await user.save();
    }

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Disconnect from the database after seeding
    await mongoose.disconnect();
  }
};

seedDatabase();


