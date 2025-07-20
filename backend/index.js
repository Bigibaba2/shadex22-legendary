require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

app.get('/', (req, res) => {
  res.send('🧬 Shadex22 Backend is Alive 💜🩵');
});

app.listen(2222, () => {
  console.log('🚀 Server running on http://localhost:2222');
});
