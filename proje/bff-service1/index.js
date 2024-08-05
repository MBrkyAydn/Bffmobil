const express = require('express');
const axios = require('axios');
const app = express();

const PORT = 8083;


app.use(express.json());

// Endpoint 
app.get('/api/personnel', (req, res) => {
    axios.get('http://localhost:8081/api/personnel') // Backend URL
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send(error));
});

app.listen(PORT, () => {
    console.log(`BFF service is running on http://localhost:${PORT}`);
});
