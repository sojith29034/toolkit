const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware

const app = express();
const PORT = 3002;

// Allow CORS from frontend origin
app.use(cors());

// Middleware
app.use(bodyParser.json());

// In-memory store for URLs (replace with a database for persistence)
const urlDatabase = {};

// Generate a unique short code
const generateShortCode = (url) => require('crypto').createHash('md5').update(url).digest('hex').slice(0, 6);

// Route: Shorten URL
app.post('/shorten', (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const shortCode = generateShortCode(url);
  urlDatabase[shortCode] = url;

  const shortUrl = `${req.protocol}://${req.get('host')}/${shortCode}`;
  res.json({ shortUrl });
});

// Route: Redirect to original URL
app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params;

  const originalUrl = urlDatabase[shortCode];
  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).send('Short URL not found');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});