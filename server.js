const connectDB = require('./config/db');
require('dotenv').config();
require('./autosha/index.js');

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send('<h1>🧬 Welcome to Shadex22 – Powered by Bigibaba 💜✅🩵</h1>');
  res.json({ msg: '🧪 Shadex22 API is working fine! 💜✅🩵' });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Shadex22 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to database:', error);
    process.exit(1); // Exit the app if DB fails
  }
};

startServer();

