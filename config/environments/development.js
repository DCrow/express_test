/**
 * Development environment settings.
 */
module.exports = function(app) {
    const errorHandler = require('errorhandler');
    const logger = require('morgan');

    app.use(logger('dev'));
    app.use(errorHandler());
    app.locals.port = 3000;
}
