/**
 * Created by FAZILE on 10/02/2015.
 */

var  Theme=require('../../models/Theme');
var  ThemeDao=require('../../dao/ThemeDao');
var  TypeThemeDao=require('../../dao/TypeThemeDao');
var  ThemeService=require('../../service/ThemeService');
var MongoClient = require('mongodb').MongoClient;
ObjectID = require('mongodb').ObjectID;
var objectId = new ObjectID();
var mongoose = require('mongoose');

module.exports = function(app) {

    app.get('/admin/Theme', function (req, res) {

        ThemeDao.findAll(function (cb) {

            TypeThemeDao.findAll(function(ltheme){
                console.dir("avec intel xdk");

              // res.json(temp);

                res.render('backEnd/pages/theme',{listeTheme:cb,listeTypeTheme:ltheme});

            });

        });

        //return cb;
        // res.send({ user: 'tobi' });



    });
    app.get('/serviceTheme/Theme', function (req, res) {

        ThemeDao.findAll(function (cb) {

            TypeThemeDao.findAll(function(ltheme){
                console.dir("avec intel xdk");

                res.json(ltheme);



            });

        });

        //return cb;
        // res.send({ user: 'tobi' });



    });






    app.post('/Theme/ajout',function(req,res,next){
        var data={
            _id:objectId,
            date_debut: new Date(req.body.date_debut),
            date_fin: new Date(req.body.date_fin),
            typetheme:{
                titre  :  req.body.titre,

                image_url:req.body.image_url,
                description:req.body.description,
                avis:0
            }
        }
        ThemeDao.save(data,function(cb){
            if(cb)  res.redirect('/admin/badge');
        });

    });

    app.get('/updateTheme/:id', function(req, res, next) {
        Theme.findByIdAndUpdate(req.params.id, {titre  :  req.body.titre,  date_debut  :  req.body.date_debut, date_fin: req.body.date_fin, image_url:req.body.image_url, description:req.body.description }, function (err, post) {
            if (err) return next(err);
            res.json(post);

        });
        console.log("eeeee");
    });
    app.get('/deleteTheme/:id', function(req, res, next) {
          Theme.findByIdAndRemove(req.params.id , function(err) {
            if (err) return next(err);
            // res.json(post);

        });


        console.log("eeeee");
    });





};
/*ThemeService.getThemeCourant(function (cb) {
 //return cb;
 // res.send({ user: 'tobi' });
 ThemeDao.findAll(function (cd) {
 res.render('pages/chat',{sss:cb,aaa:cd} );
 });

 //return cb;
 // res.send({ user: 'tobi' });



 });*/


