const mongoose = require('mongoose');
const config = require('./index');

async function connectDB() {
  try {
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(config.mongodb.uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
}

module.exports = { connectDB };
