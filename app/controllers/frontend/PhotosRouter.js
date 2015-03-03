/**
 * Created by Njara on 12/02/2015.
 */
var  UsersDao=require('../../dao/UsersDao');
var  PhotosDao=require('../../dao/PhotosDao');
var  commentaireDao=require('../../dao/CommentaireDao');
var  voteDao=require('../../dao/VoteDao');
var commentaire=require('../../models/Commentaires');
var moment = require("moment");
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
    app.get('/PhotoInfo/:id', function (req, res) {

        var data={
            photos_id:req.params.id
            //user_id:"54e4c519edf460b009622a20"
        }
        commentaireDao.findAll(data,function(cb1){
            res.render("frontend/pages/photo");
        });

        /*PhotosDao.findImage({},function(cb){
            console.dir(cb);
        })*/
    });
    app.get('/Photo/AjoutCommentaire', function (req, res) {
        var now =moment(new Date());


        var data={
            _id:objectId,
            photos_id:"54e4c519edf460b009622a20",
            user_id:"54e2c53fc7f66d935365da70",
            message:"reveko elisany e",
            date:new Date(now.format("YYYY-MM-DD"))
            //user_id:"54e4c519edf460b009622a20"
        }
        commentaireDao.save(data,function(err,cb1){
            if(err) return console.error( err);
            console.dir(cb1);
        });

        /*PhotosDao.findImage({},function(cb){
         console.dir(cb);
         })*/
    });

}
