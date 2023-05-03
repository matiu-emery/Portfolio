const express = require('express');
const path = require('path');
const app = express();

// Serve the index.html file when the root directory is requested
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve all other static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

