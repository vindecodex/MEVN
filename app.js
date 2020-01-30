const express = require('express');

const app = express();

// Middleware for sending JSON
app.use(express.json());


app.use('/', (req, res) => {
	res.send('Hello');
});

module.exports = app;
