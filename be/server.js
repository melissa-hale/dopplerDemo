const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;

// In-memory representation of our secret
let secret = process.env.API_KEY;

app.get('/secret', (req, res) => {
    res.json({ secret });
});

// Simulate checking Doppler for a new secret every minute
setInterval(async () => {
    try {
        secret = process.env.API_KEY;
        console.log('Retrieved new key:', secret)
    } catch (error) {
        console.error('Error fetching new secret:', error);
    }
}, 60000);

app.listen(port, () => {
    console.log('Railway private domain: ', process.env.RAILWAY_PRIVATE_DOMAIN)
    console.log(`Backend server started on port: ${port}`);
});

