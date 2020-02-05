const path = require('path');
const express = require('express');

const app = express();
const publicDirectory  = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));

app.get('/weather', (req,res) => {
    res.send({
        temperature : 50,
        location : 'Philadelphia',
        summary: 'clear',
        precipitation : 0
    });
});

let d = new Date();
let port = 3000;
app.listen(port,() => console.log(`The server has started at time ${d.getHours()}:${d.getMinutes()} on ${d.getDate()}-${d.getMonth()}-${d.getFullYear()} on port ${port}`));