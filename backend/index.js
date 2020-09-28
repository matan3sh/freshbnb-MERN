const express = require('express');
const bodyParser = require('body-parser');
const { provideErrorHandler } = require('./middlewares/errorHandler');
const connectDB = require('./config/db');

const app = express();

const auth = require('./middlewares/auth');

// Middleware
app.use(bodyParser.json());
app.use(provideErrorHandler);

app.get('/api/secret', auth, (req, res) => {
  return res.json({
    message: `Super Secret Message to: ${res.locals.user.username}`,
  });
});

// Routes
const rentalRoutes = require('./api/rental/rental.routes');
app.use('/api/rentals', rentalRoutes);

const userRoutes = require('./api/user/user.routes');
app.use('/api/users', userRoutes);

// Connect Database
connectDB();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server is listening on port:', PORT));
