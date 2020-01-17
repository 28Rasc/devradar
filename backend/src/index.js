const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const PORT = 3333;

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnihide@cluster0-aa5kv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use( cors() );
app.use( express.json() );
app.use(routes);

app.listen(PORT);