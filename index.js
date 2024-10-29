const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5001;

// Create an app instance
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
  res.render('pages/index'); // Render an EJS view
});

app.get('/cool', (req, res) => {
  res.send(cool()); // Respond with cool ASCII faces
});

// Serve 'index.html' from the public directory
app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve 'website2.html' from the public directory
app.get('/website2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'website2.html'));
});

// Start listening on the specified port
app.listen(PORT, () => console.log(`Listening on ${PORT}`));