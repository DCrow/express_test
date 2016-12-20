const express = require('express');
const app = express();
const controllers = require('./app/routes/index.js');
const path = require('path');

module.exports = app;

console.log(`Starting Express server in ${app.get('env')}`);

const middleware = require('./config/conf')(app);
const routes = require('./config/routes')(app);

app.listen(app.get('port'), function(){
    console.log(`Express server started.\nListening on port ${app.get('port')}`);
});

