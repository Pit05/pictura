/**
 * Created by Njara on 09/02/2015.
 */
var  UserCollection=require('../../models/UserCollection');
var  badgeDao=require('../../dao/BadgeDao');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
module.exports = function(app) {
    app.get('/', function (req, res) {
        /* var  thor=new  UserCollection({username:"rrrrrr"});
         //   res.send('exemple/54d0afe1090352502727cf22',thor);
         UserCollection.find(function(err, movies) {
         if (err) return console.error(err);
         console.dir(movies);
         res.render('pages/chat', {movies: movies});

         });*/
        var  re;





    });
    app.get('/admin/badge', function (req, res) {
        /* var  thor=new  UserCollection({username:"rrrrrr"});
         //   res.send('exemple/54d0afe1090352502727cf22',thor);
         UserCollection.find(function(err, movies) {
         if (err) return console.error(err);
         console.dir(movies);
         res.render('pages/chat', {movies: movies});

         });*/
        badgeDao.findAll(function(cb){
                console.dir(cb);
                res.render('backEnd/pages/badgeView',{listeBadge:cb});
            }
        );

        /*var  re;
         badgeDao.findAll(function(cb){
         console.dir(cb);
         }
         );*/
        //require('./controllers/BadgeRouter.js')(app);


    });
    app.post('/badge/ajout',function(req,res,next){
      badgeDao.save(req.body.intitule,req.body.moyenne,req.body.url,function(cb){
                if(cb)  res.redirect('/admin/badge');
          }
      );
       // console.dir(req.body.intitule);


    });
    app.post('/badge/modif',function(req,res,next){
        console.dir(req.body.id);
        badgeDao.update(req.body.id,req.body.intitule,req.body.moyenne,req.body.image_url,function(cb){
                if(cb)  res.redirect('/admin/badge');
            }
        );
        // console.dir(req.body.intitule);


    });


    app.get('/delete/badge/:id', function(req, res, next) {
        //exemple  we  rrr  username  no  soloiko

        /* UserCollection.find({ _id:req.params.id },function(err,docs){
         docs.remove();  //Remove all the documents that match!
         });*/
        var  _id=new  mongoose.Schema.ObjectId(req.params.id).path;
        badgeDao.delete(req.params.id,function(cb){
            if(cb)  res.redirect('/admin/badge');
        });


        console.log("eeeee");
    });





};
