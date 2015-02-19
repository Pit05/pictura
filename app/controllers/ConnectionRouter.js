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
            email:"njaraliantsoa@gmail.com",
            mdp:"azerty"
        }
        userDao.testLoginMembre(data,function(cb){

           if(!cb)
                console.dir("Email ou mot de passe incorrect");
            else {
               console.dir(cb);
               req.session.user=cb;
               delete  req.session.user.mdp
               req.session.user=cb;
           }
            //res.redirect('/Home');!
        })

    });
    app.post('/Inscription/Membre', function (req, res) {
        var data={
            _id:objectId,
            pseudo:"test",
            email:"test@gmail.fr",
            image_url:"frontend/img/upload/image_0000",
            mdp:"azerty",
            badge_id:"54d7867573a8651b8969649c"
        }
        userDao.save(data,function(cb){
                if(cb==false)
                    console.dir("Sauvegarde impossible");
        });
       // res.redirect('/Home');
    });
}
