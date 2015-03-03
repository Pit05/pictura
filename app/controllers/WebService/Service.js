/**
 * Created by Njara on 20/02/2015.
 */
var mongoose = require('mongoose');
//var photoDao=require('/PhotoDao');
var  photosDao=require('../../dao/PhotosDao');
var userDao=require('../../dao/UsersDao');
module.exports = function(app) {
    app.get('/ListePhotoPublier', function (req, res){
            photosDao.getListImageNow(function(cb){
                   console.dir(cb);
                   res.json(cb);
            });
    });
    app.post('/LoginWS/Membre', function (req, res) {
        console.dir("ezezeze");
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
                res.json(req.session.user);
            }

        })

    });
}