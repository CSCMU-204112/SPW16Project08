var indexCtrl = require('./controllers/index.controllers');
var registerCtrl = require('./controllers/register.controllers');

module.exports = function(app){
        app.get('/', indexCtrl.main);
        app.get('/shop', indexCtrl.shop);
        app.get('/login', indexCtrl.login);
        app.get('/single', indexCtrl.single);
        app.get('/register', registerCtrl.register);
        
        app.post('/create', registerCtrl.createUser);
        app.post('/checkin', registerCtrl.checkLogin);
}

// input#username.validate(type='text', name='username', placeholder = 'username')
// input#password.validate(type='password', name='password', placeholder ='password')