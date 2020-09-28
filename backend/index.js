const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const rentalRoutes = require('./api/rental/rental.routes');
app.use('/api/rentals', rentalRoutes);

const userRoutes = require('./api/user/user.routes');
app.use('/api/users', userRoutes);

// Connect Database
connectDB();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server is listening on port:', PORT));
