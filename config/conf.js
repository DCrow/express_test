/**
 * Module dependencies.
 */
module.exports = function(app) {
    const express = require('express');
    const favicon = require('serve-favicon');
    const methodOverride = require('method-override');
    const session = require('express-session');
    const bodyParser = require('body-parser');
    const path = require('path');
    const publicPath = path.join(__dirname, '../public');


    app.set('views', path.join( __dirname, '../app/views') );
    app.set('view engine', 'pug');

    app.use(express.static(publicPath));
    app.use(favicon(`${publicPath}/favicon.ico`));

    app.use(methodOverride());
    app.use(
        session({
            resave: true,
            saveUninitialized: true,
            secret: 'blarg blarg'
        })
    );
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //Setup environment
    require(`./environments/${app.get('env')}`)(app);

    app.set('port', app.locals.port);
};



