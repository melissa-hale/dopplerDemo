const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.send(`
        <h1>Secret Rotation Demo</h1>
        <button onclick="fetchSecret()">Get Secret</button>
        <div id="secretDisplay"></div>
        <script>
            async function fetchSecret() {
                try {
                    const response = await fetch('agonizing-crate.railway.internal/secret');
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
    console.log(`Frontend server started on http://${process.env.RAILWAY_PUBLIC_DOMAIN}:${port}`);
});

