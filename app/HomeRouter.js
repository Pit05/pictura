/**
 * Created by Njara on 02/02/2015.
 */

var  UserCollection=require('./models/UserCollection');
var  badgeDao=require('./dao/BadgeDao');
var  TypeThemeDao=require('./dao/TypeThemeDao');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var  express=require('express');


module.exports = function(app) {

    app.get('/', function (req, res) {
       /* var  thor=new  UserCollection({username:"rrrrrr"});
     //   res.send('exemple/54d0afe1090352502727cf22',thor);
        UserCollection.find(function(err, movies) {
            if (err) return console.error(err);
            console.dir(movies);
            res.render('pages/chat', {movies: movies});

        });*/

       /* TypeThemeDao.findAll(function(cb){
               // console.dir(cb);

                // res.render('backEnd/pages/badgeView',{listeBadge:cb});
            }
        );*/
       res.render('frontend/pages/accueil');
        /*var  re;
        badgeDao.findAll(function(cb){
                console.dir(cb);
            }
        );*/
        //require('./controllers/BadgeRouter.js')(app);




    });
    app.get('/admin', function (req, res) {

        /* var  thor=new  UserCollection({username:"rrrrrr"});
         //   res.send('exemple/54d0afe1090352502727cf22',thor);
         UserCollection.find(function(err, movies) {
         if (err) return console.error(err);
         console.dir(movies);
         res.render('pages/chat', {movies: movies});

         });*/
        res.render('backEnd/pages/login');
        /*var  re;
         badgeDao.findAll(function(cb){
         console.dir(cb);
         }
         );*/
        //require('./controllers/BadgeRouter.js')(app);




    });
    app.post('/exemple',function(req,res,next){

            new  UserCollection({username  :  req.body.nam,  email  :  req.body.em}).save(function(err, site) {

            });

    });

    app.get('/exemple/:id', function(req, res, next) {
        //exemple  we  rrr  username  no  soloiko
        UserCollection.findByIdAndUpdate(req.params.id, {username:"rrrrrr"}, function (err, post) {
        if (err) return next(err);
                 res.json(post);

            });
        console.log("eeeee");
    });
    app.get('/delete/:id', function(req, res, next) {
        //exemple  we  rrr  username  no  soloiko

       /* UserCollection.find({ _id:req.params.id },function(err,docs){
            docs.remove();  //Remove all the documents that match!
        });*/
        UserCollection.findByIdAndRemove(req.params.id , function(err) {
            if (err) return next(err);
           // res.json(post);

             });


        console.log("eeeee");
    });





};



/* MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
 if(!err) {
 console.log("We are connected");
 var collection = db.collection('usercollection');
 collection.find().toArray(function(err, items) {
 console.log(items[0]['username']);
 });
 }

 });*/