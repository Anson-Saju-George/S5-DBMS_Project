const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');  // Import path module

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../spiceta-frontend'))); // Adjust this path as needed

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1965',
  database: 'spiceta_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Spiceta API!');
});

// Route to get all products
app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM Products';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
