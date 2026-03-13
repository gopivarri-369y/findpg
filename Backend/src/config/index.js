/**
 * Application config. Load from environment (use .env for local / cloud DB address).
 * For MongoDB Atlas: set MONGODB_URI in .env to your cloud connection string.
 */
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3369,
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/hostel-management',
  },
};
