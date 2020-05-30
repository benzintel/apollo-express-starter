// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true });
// const mainController = require('../controller/mainController');
// const userMiddleware = require('../middleware/userMiddleware');


module.exports = function (app, prefixUrl) {

    // server.get(`${prefixUrl}/`, csrfProtection, userMiddleware.verifyToken, mainController.main);
    // server.get(`${prefixUrl}/view`, csrfProtection, userMiddleware.verifyToken, mainController.testView);
    app.get('/hello', (req, res) => {
        res.send('Hello')
    });

};