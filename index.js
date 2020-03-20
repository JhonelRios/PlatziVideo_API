const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/json', (req, res) => {
    res.json({ Hello: 'world' });
});

app.get('/year/:year', (req, res) => {
    let isLeap;
    let year = req.params.year;

    year % 4 === 0 ? (isLeap = true) : (isLeap = false);

    res.json({ isLeap: isLeap });
});

app.listen(config.port, () => {
    console.log(`Escuchando en http://localhost:${config.port}`);
});
