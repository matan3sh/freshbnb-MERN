const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { provideErrorHandler } = require('./middlewares/errorHandler');
const auth = require('./middlewares/auth');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(provideErrorHandler);

// Auth Middleware Exampel
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

const bookingRoutes = require('./api/booking/booking.routes');
app.use('/api/bookings', bookingRoutes);

const imageUploadRoutes = require('./api/image-upload/image-upload.routes');
app.use('/api/image-upload', imageUploadRoutes);

const reviewRoutes = require('./api/review/review.routes');
app.use('/api/reviews', reviewRoutes);

// Connect Database
connectDB();

// Production Middleware
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')));
} else {
  const corsOptions = {
    origin: [
      'http://127.0.0.1:3001',
      'http://localhost:3001',
      'http://127.0.0.1:3000',
      'http://localhost:3000',
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server is listening on port:', PORT));
