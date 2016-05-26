var memberCtrl = require('./controllers/member.controllers');

module.exports = function(app){
    app.get('/', function(req, res){
        res.send('Working');
    });

    app.route('/member')
    .get(memberCtrl.getAll)
    .post(memberCtrl.insert);
}
