var  Theme=require('../models/Theme');
//var  TypeThemeDao=require('../models/TypeThemeDao');
var mongoose = require('mongoose');
module.exports.getThemeCourant= function(cb){
    var data={
        "date_debut":{$lt:new Date('2015-06-18')},
        "date_fin":{$gte:new Date('2015-06-18')}
    };
    Theme.find(data,function(err, listeTheme){
        if(err) return console.error(err);
        // testDateTheme(null,null,listeTheme);
        //return listeTheme;

        cb(listeTheme);
    });

    // return listeTheme;

}
module.exports.findAll= function(cb){
    Theme.find(function(err, listeTheme){
        if(err) return console.error(err);
        cb(listeTheme);
    });

}
module.exports.findById=function(id,cb){

    Theme.findById(id,function (err, listeBadge) {
        if (err) return console.error(err);
        //console.dir(listeBadge);
        //  rep = listeBadge;
        //  console.dir(rep);
        //  rep=listeBadge;
        cb(listeBadge);
    });

}
module.exports.save=function(data,cb){

    new  Theme(data).save(function(err, site) {
        if(err)  console.error(err);
        else  cb(true);

    });

}
module.exports.update=function(id,intitule,moyenne,url,cb){

    Badge.findByIdAndUpdate(id, {name:intitule,moyenne:moyenne,image_url:url}, function (err, post) {
        if (err) return next(err);
        // res.json(post);
        else   cb(true);
    });

}
module.exports.delete=function(id,cb){

    Badge.findByIdAndRemove( id, function(err) {
        if (err) return console.dir(err);
        // res.json(post);
        else  cb(true);

    });

}


