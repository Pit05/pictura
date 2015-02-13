/**
 * Created by Njara on 12/02/2015.
 */
var  userDao=require('../dao/UsersDao');
var mongoose = require('mongoose');
ObjectID = require('mongodb').ObjectID;
var objectId = new ObjectID();
module.exports = function(app) {
    app.get('/Login/Membre', function (req, res) {

    });

    app.post('/Login/Membre', function (req, res) {
        var data={
            email:req.body.email,
            mdp:req.body.password
        }
        userDao.testLoginMembre(data,function(cb){

           if(!cb)
                console.dir("Email ou mot de passe incorrect");
            else {
               console.dir(cb);
               req.session.user=cb;
               delete  req.session.user.mdp;
               req.session.user=cb;
           }
            res.redirect('/');
        })

    });
    app.post('/Inscription/Membre', function (req, res) {

        var data={
            _id:objectId,
            pseudo:req.body.pseudo,
            email:req.body.email,
            image_url:"frontend/img/upload/image_0000",
            mdp:req.body.password,
            badge_id:"54d7867573a8651b8969649c"
        }
        userDao.save(data,function(cb){
                console.dir(cb);
        });

       // res.redirect('/Home');

    });
    app.get('/register', function (req, res) {
        res.render('frontend/pages/register');
    });
}
