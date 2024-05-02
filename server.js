const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/connection');
const routes = require('./routes');

// Set the 'strictQuery' option to false to suppress the deprecation warning
mongoose.set('strictQuery', false);
// Connect to MongoDB
connectDB()
  .then(() => {
    console.log('Connected to MongoDB');

    // Start your server or perform other operations that depend on the database connection
    const app = express();
    const PORT = process.env.PORT || 3001;

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Routes
    app.use(routes);

    app.get('/', (req, res) => {
      res.send('Welcome to the backend app!');
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });
  process.env.NODE_NO_WARNINGS = 1;