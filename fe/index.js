const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/fetch-secret', async (req, res) => {
    try {
        const response = await axios.get('backend.railway.internal/secret');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching secret from backend:', error);
        res.status(500).send("Error fetching secret");
    }
});

app.get('/', async (req, res) => {
    res.send(`
        <h1>Secret Rotation Demo</h1>
        <button onclick="fetchSecret()">Get Secret</button>
        <div id="secretDisplay"></div>
        <script>
            async function fetchSecret() {
                try {
                    const response = await fetch('/fetch-secret');
                    console.log(response)
                    const data = await response.json();
                    document.getElementById('secretDisplay').textContent = data.secret;
                } catch (error) {
                    console.error('Error fetching secret:', error);
                }
            }
        </script>
    `);
});

app.listen(port, () => {
    console.log(`Railway public domain: ${process.env.RAILWAY_PUBLIC_DOMAIN}`)
    console.log(`Frontend server started on port: ${port}`);
});
