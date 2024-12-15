const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware

const urlShortener = require('./routes/urlShortener')

const app = express();
const PORT = 3002;

// Allow CORS from frontend origin
app.use(cors());
// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Use Routes
app.use('/', urlShortener);


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});