/**
 * Created by Njara on 12/02/2015.
 */
var  UsersDao=require('../../dao/UsersDao');
var  PhotosDao=require('../../dao/PhotosDao');
var  commentaireDao=require('../../dao/CommentaireDao');
var  voteDao=require('../../dao/VoteDao');
var commentaire=require('../../models/Commentaires');
var moment=require('moment');
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
    app.post('/Photo/AjoutCommentaire', function (req, res) {
        var now =moment(new Date());
         var data={
             _id:objectId,
             photos_id:req.body.photo,
             user_id:req.session.user.user_id,
             message:req.body.commentaire,
             date:new Date(now.format("YYYY-MM-DD"))
         }
        commentaireDao.save(data,function(err,cb1){
            if(err) return console.error( err); console.dir(cb1);
        });
    });
    app.get('/Photo/:id', function (req, res) {

        var data={
            photos_id:req.params.id
            //user_id:"54e4c519edf460b009622a20"
        }
        commentaireDao.findAll(data,function(cb1){
            PhotosDao.findById(req.params.id,function(cb2){

               res.render("frontend/pages/photo",{infocommentaire:cb1,infophoto:cb2});
            });
        });

        /*PhotosDao.findImage({},function(cb){
            console.dir(cb);
        })*/
    });

}
