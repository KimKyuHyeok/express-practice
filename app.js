const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api/index');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());

app.use('/api', api);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});