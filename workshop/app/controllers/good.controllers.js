var pgp = require('pg-promise')();
const dbconfig = require('../../config/member');
var db = pgp(dbconfig);

exports.getAll = function(req, res){

    db.any('select * from member;')
    .then(function(data){

        // console.log(data);
        // res.send('OK');
        res.render('member',{
            members: data
        });

    })
    .catch(function(error){
        console.log(error);
    });

}

exports.insert = function(req, res){

    db.one('insert into member (uid, username, password, fname, lname, email) values($1, $2, $3, $4, $5, $6) returning uid', 
        [req.body.uid, req.body.username, req.body.password, req.body.fname, req.body.lname, req.body.email])
    .then(function(data){
        console.log('Insert member ${data.uid}');
        res.redirect('/member');
    })
    .catch(function(error){
        console.log(error);
    });

}