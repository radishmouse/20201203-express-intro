// skimming means:
// 1. look at the requires/exports
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);
const db = require('./db');

// Retrieve all
app.get('/', (req, res) => {
    res.json(db.allEmployees());
});

// Retrieve one (route params)
app.get('/id/:id', (req, res) => {
    res.json(db.employeeById(req.params.id));
});

// Show list of ids and names
app.get('/id/', (req, res) => {
    res.json(db.employeeIdList());
});


// Search by name
app.get('/name/:searchTerm', (req, res) => {
    res.json(db.employeesByName(req.params.searchTerm));
});

// Catch all (404)
app.get('*', (req, res) => {
    res.status(404).send(`
        <h1>Page not found</h1>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
