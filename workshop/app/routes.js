var indexCtrl = require('./controllers/index.controllers');

module.exports = function(app){
        app.get('/main', indexCtrl.main);
        app.get('/shop', indexCtrl.shop);
}

