const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const connectDB = require('./config/db.js')

// Load env var
dotenv.config({
    path: './config/config.env'
})

// connect to database
connectDB();

// Route Files
const bootcamps = require('./routes/bootcamps')

const app = express();

// dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// Handle Unhandled Rejections
process.on('unhandledRejection', (err, Promise) => {
    console.log(`Error: ${err.message}`);
    // Close Server and exit process
    server.close(() => process.exit(1))
})