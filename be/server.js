const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

let secret = process.env.API_KEY;

app.get('/secret', (req, res) => {
    res.json({ secret });
});

setInterval(async () => {
    try {
        secret = process.env.API_KEY;
        console.log('Current key:', secret)
    } catch (error) {
        console.error('Error fetching new secret:', error);
    }
}, 30000);

app.listen(port, '::', () => {
    console.log('Railway private domain: ', process.env.RAILWAY_PRIVATE_DOMAIN)
    console.log(`Backend server started on  ::${port}`);
});

