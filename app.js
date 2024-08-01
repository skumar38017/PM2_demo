// app.js
const express = require('express');
const app = express();
const port = 3004;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('local_app.js running on docker container:3004');
});

// Define a route for GET requests to /about
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Define a route for POST requests to /data
app.post('/data', (req, res) => {
  res.json(req.body);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
