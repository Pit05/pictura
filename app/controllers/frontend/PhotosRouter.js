/**
 * Created by Njara on 12/02/2015.
 */
var  UsersDao=require('../../dao/UsersDao');
var  PhotosDao=require('../../dao/PhotosDao');
var  commentaireDao=require('../../dao/CommentaireDao');
var  voteDao=require('../../dao/VoteDao');
var commentaire=require('../../models/Commentaires');
var ThemeService=require('../../service/ThemeService');
var moment=require('moment');
ObjectID = require('mongodb').ObjectID;
var objectId = new ObjectID();
module.exports = function(app) {
    app.get('/galery', function (req, res) {
        res.render("frontend/pages/galery");
    });

    app.get('/Photo/Vote/:id', function (req, res) {
        var data={
            _id:objectId,
            id_photo:req.params.id,
            user_id:req.session.user._id
        }

        voteDao.save(data,function(cb){
                if(cb) {
                    console.dir(cb);
                    res.end("erreur");
                }
                else {
                        var dataUp={
                            $inc:{vote:1}
                        }

                        PhotosDao.update({_id:"54e4c519edf460b009622a20"},dataUp,function(imageUp){


                            UsersDao.testChangeBadge(imageUp,function(callb){
                                res.end("reussit");
                                res.json(callb);
                            });
                        });
                }

        })
    });
    app.post('/Photo/AjoutCommentaire', function (req, res) {
        var now =moment(new Date());
         var data= {
             _id: objectId,
             photos_id:new ObjectID(req.body.photo),
             user_id: req.session.user._id,
             commentaire: req.body.commentaire,
             date: new Date(now.format("YYYY-MM-DD"))
         };
        commentaireDao.save(data,function(err,cb1){
           // if(err) return console.error( err);
            console.dir(cb1);
            res.redirect("/Photo/"+req.body.photo);
        });
    });
    app.post('/ajoutPhoto', function (req, res) {
        var now =moment(new Date());
        var data={
            _id: objectId,
            title: req.body.titre,
            user_id: req.session.user._id,
            image_url: req.files.file.originalname,//url de l'image
            description:req.body.description,
            date:new Date(now.format("YYYY-MM-DD")),
            vote:0,
            theme_id:''
        };
        ThemeService.getThemeCourant(function(th){

            data.theme_id=th._id;

            PhotosDao.save(data,function(cb){
                res.redirect("/Upload");
            });
        });

    });
    app.get('/Photo/:id', function (req, res) {

        var data={
            photos_id:req.params.id
            //user_id:"54e4c519edf460b009622a20"
        }
        commentaireDao.findAll(data,function(cb1){
            PhotosDao.findById(req.params.id,function(cb2){
                console.dir(cb2);
               res.render("frontend/pages/photo",{infocommentaire:cb1,infophoto:cb2});
            });
        });

        /*PhotosDao.findImage({},function(cb){
            console.dir(cb);
        })*/
    });

}
