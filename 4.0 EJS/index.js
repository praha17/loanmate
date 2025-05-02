const express = require('express');
const path = require('path');
const app = express();

// Setup EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// GET route to show signup form
app.get('/', (req, res) => {
  res.render('index'); // renders index.ejs
});

// POST route to handle signup form submission
app.post('/signup', (req, res) => {
  const userName = req.body.name;
  res.render('welcome', { name: userName });
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
