var indexCtrl = require('./controllers/index.controllers');
var indexinCtrl = require('./controllers/indexin.controllers');
var registerCtrl = require('./controllers/register.controllers');

module.exports = function(app){
        app.get('/', indexCtrl.main);
        app.get('/shop', indexCtrl.shop);
        app.get('/login', indexCtrl.login);
        app.get('/single', indexCtrl.single);
        app.get('/register', indexCtrl.register);

        app.get('/in', indexinCtrl.main);
        app.get('/logout', indexCtrl.main);
        
        app.get('/shop/in', indexinCtrl.shop);
        app.get('/single/in', indexinCtrl.single);
        app.get('/register/in', indexinCtrl.register);
        
        app.post('/create', registerCtrl.createUser);
        app.post('/checkin', registerCtrl.checkLogin);
}

// input#username.validate(type='text', name='username', placeholder = 'username')
// input#password.validate(type='password', name='password', placeholder ='password')