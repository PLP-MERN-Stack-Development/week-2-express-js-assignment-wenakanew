// server.js - Starter Express server for Week 2 assignment

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const productsRouter = require('./routes/products');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(logger);
app.use('/api', auth);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// Products routes
app.use('/api/products', productsRouter);

// Global error handler (should be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; 