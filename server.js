const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

/*app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});*/


app.get('/api', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public/api.html'));
});


app.get('/api/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/api.html'));
});

app.get('/api/:ip', async (req, res) => {
    res.status(400).json({ error: 'Please provide both IP and Port' });
});


app.get('/api/:ip/:port', async (req, res) => {
    const ip = req.params.ip;
    const port = req.params.port;

    try {
        const response = await axios.get('https://mtasa.com/api/');
        const servers = response.data;

        const server = servers.find(server => server.ip === ip && server.port === parseInt(port, 10));

        if (server) {
            res.json(server);
        } else {
            res.status(404).json({ error: 'Server not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.use((req, res) => {
    res.status(404).json({ error: 'Provided access not found' });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
