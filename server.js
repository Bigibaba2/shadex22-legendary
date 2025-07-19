const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send('<h1>🧬 Welcome to Shadex22 – Powered by Bigibaba 💜✅🩵</h1>');
});

app.listen(PORT, () => {
  console.log(`🚀 Shadex22 Server running on http://localhost:${PORT}`);
});