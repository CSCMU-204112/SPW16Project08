var indexCtrl = require('./controllers/index.controllers');
var registerCtrl = require('./controllers/register.controllers');

module.exports = function(app){
        app.get('/', indexCtrl.main);
        app.get('/shop', indexCtrl.shop);
        app.get('/login', indexCtrl.login);
        app.get('/single', indexCtrl.single);
        app.get('/single2', indexCtrl.single2);
        app.get('/single3', indexCtrl.single3);
        app.get('/single4', indexCtrl.single4);
        app.get('/single5', indexCtrl.single5);
        app.get('/single6', indexCtrl.single6);
        app.get('/single7', indexCtrl.single7);
        app.get('/single8', indexCtrl.single8);
        app.get('/single9', indexCtrl.single9);
        app.get('/single10', indexCtrl.single10);
        app.get('/single11', indexCtrl.single11);
        app.get('/single12', indexCtrl.single12);
        app.get('/register', registerCtrl.register);
        
        app.post('/create', registerCtrl.createUser);
        app.post('/checkin', registerCtrl.checkLogin);
}

// input#username.validate(type='text', name='username', placeholder = 'username')
// input#password.validate(type='password', name='password', placeholder ='password')