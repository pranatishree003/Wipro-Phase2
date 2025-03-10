const path = require('path');
const express = require('express');
require('dotenv').config({ path: './config/config.env' });
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');

const doctorRoutes = require('./routes/doctor');
const patientRoutes = require('./routes/patient');

// MySQL FIle Import
require('./config/db');

const app = express();

// Cors
app.use(cors());
app.use(express.json());

// Dev Logging Middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Static
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/doctors', doctorRoutes);
app.use('/api/patients', patientRoutes);

const PORT = process.env.PORT || 3030;
const server = app.listen(
  PORT,
  console.log(
    `🚀 Started in Port ${process.env.PORT} on ${process.env.NODE_ENV} mode`
      .yellow.bold
  )
);

// Handle Unhandled Rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  // Close Server and Exit
  server.close(() => process.exit(1));
});
