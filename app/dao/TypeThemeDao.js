/**
 * Created by Njara on 12/02/2015.
 */
var  TypeTheme=require('../models/TypeTheme');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectID = require('mongodb').ObjectID;
var objectId = new ObjectID();
module.exports.findAll=function(cb) {
    var  rep;
    TypeTheme.find(function (err, listeTypeTheme) {
        if (err) return console.error(err);
        //console.dir(listeBadge);
        //  rep = listeBadge;
        //  console.dir(rep);
        //  rep=listeBadge;

        cb(listeTypeTheme);
    });

    // return  rep;
}
module.exports.findById=function(id,cb){

    TypeTheme.findById(id,function (err, listeTypeTheme) {
        if (err) return console.error(err);
        //console.dir(listeBadge);
        //  rep = listeBadge;
        //  console.dir(rep);
        //  rep=listeBadge;
        cb(listeTypeTheme);
    });

}
module.exports.save=function(title,decription,url,cb){
    new  TypeTheme({_id:objectId,title  :  title,  decription  :  decription,  image_url:url}).save(function(err, site) {
        if(err)  console.error(err);
        else  cb(true);

    });

}
module.exports.update=function(id,title,decription,url,cb){

    TypeTheme.findByIdAndUpdate(id, {title:title,decription:decription,image_url:url}, function (err, post) {
        if (err) return next(err);
        // res.json(post);
        else   cb(true);
    });

}
module.exports.delete=function(id,cb){

    TypeTheme.findByIdAndRemove( id, function(err) {
        if (err) return console.dir(err);
        // res.json(post);
        else  cb(true);

    });

}