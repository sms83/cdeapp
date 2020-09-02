const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Base URL');
})


app.listen(3000, (err,res) => {
    console.log('Server running at 3000');
})