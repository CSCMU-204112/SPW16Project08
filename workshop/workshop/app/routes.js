var studentCtrl = require('./controllers/student.controllers');
var departmentCtrl = require('./controllers/department.controllers');

module.exports = function(app){
    app.get('/', function(req, res){
        res.send('Working');
    });
    app.get('/student', studentCtrl.getAll);
    app.get('/department', departmentCtrl.getAll);
    app.post('/student', studentCtrl.insertStudent);
    app.get('/studentdep', studentCtrl.getAllWithDepartment);
}