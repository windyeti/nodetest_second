const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<p>Я здесь!!!</p>')
});

app.listen(8090, (err) => {
    console.log('Server run on 8090 PORT!!!')
});