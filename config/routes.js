const allRoutes = require('../app/routes/index');
/**
 * Routes
 */
module.exports = function(app) {
    app.get('/', allRoutes.index);

}



