const express = require('express');

const libSample = require('lib-sample');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h1>My App</h1>'
        + '<a href="/lib-sample/">Lib Sample</a>');
});

app.use('/lib-sample', libSample.router);

module.exports = app;
