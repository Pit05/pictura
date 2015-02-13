/**
 * Created by Njara on 12/02/2015.
 */
var  UsersDao=require('../../dao/UsersDao');
var  PhotosDao=require('../../dao/PhotosDao');
var  commentaireDao=require('../../dao/CommentaireDao');
var  voteDao=require('../../dao/VoteDao');
var commentaire=require('../../models/Commentaires');
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
    app.get('/Photo/Detail/:id', function (req, res) {
        var data={
            photos_id:"54e4c519edf460b009622a20"
            //user_id:"54e4c519edf460b009622a20"
        }
        commentaireDao.findAll(data,function(err,cb1){
            if(err) return console.error( err);
                 console.dir(cb1);
        });

        /*PhotosDao.findImage({},function(cb){
            console.dir(cb);
        })*/
    });

}
