const express = require('express');
const config = require('./config');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const hostelRoutes = require('./routes/hostelRoutes');

const app = express();
const PORT = config.port;

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', hostelRoutes);

async function start() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start:', err);
  process.exit(1);
});
