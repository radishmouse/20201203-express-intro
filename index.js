const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);
const routes = require('./routes');

app.get('/', (req, res) => {
    res.send(`
      <h1>Welcome to the Employee API!</h1>
<iframe src="https://giphy.com/embed/3owyoUHuSSqDMEzVRu" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/foxhomeent-3owyoUHuSSqDMEzVRu">via GIPHY</a></p>
    `);
})

app.use('/employees', routes);

// Catch all (404)
app.get('*', (req, res) => {
    res.status(404).send(`
        <h1>Page not found</h1>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
