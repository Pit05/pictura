/**
 * Created by Njara on 12/02/2015.
 */
var  UsersDao=require('../../dao/UsersDao');
var  PhotosDao=require('../../dao/PhotosDao');
var  voteDao=require('../../dao/VoteDao');
ObjectID = require('mongodb').ObjectID;
var objectId = new ObjectID();
module.exports = function(app) {
    app.get('/Login/Membre', function (req, res) {

    });
    app.get('/Photo/Vote/:id', function (req, res) {
        var data={
            _id:objectId,
            id_photo:req.params.id,
            user_id:req.session.user._id
        }

        voteDao.save(data,function(cb){
                if(cb) console.dir(cb);
                else {
                        var dataUp={
                            $inc:{vote:1}
                        }
                        console.dir("fdfdf");
                        PhotosDao.update({_id:"54e4c519edf460b009622a20"},dataUp,function(imageUp){
                                            console.dir(imageUp);

                            UsersDao.testChangeBadge(imageUp,function(callb){
                                req.json(callb);

                            });
                        });
                }

        })
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
