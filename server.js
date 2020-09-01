const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

// single end pointn
app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log('Server started on pornt ${PORT}'));
