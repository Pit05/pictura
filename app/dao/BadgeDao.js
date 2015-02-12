/**
 * Created by Njara on 08/02/2015.
 */
var  Badge=require('../models/Badge');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectID = require('mongodb').ObjectID;
var objectId = new ObjectID();
module.exports.findAll=function(cb) {
    var  rep;
      Badge.find(function (err, listeBadge) {
        if (err) return console.error(err);
        //console.dir(listeBadge);
      //  rep = listeBadge;
        //  console.dir(rep);
        //  rep=listeBadge;
          cb(listeBadge);
      });

    // return  rep;
}
module.exports.findById=function(id,cb){

    Badge.findById(id,function (err, listeBadge) {
        if (err) return console.error(err);
        //console.dir(listeBadge);
        //  rep = listeBadge;
        //  console.dir(rep);
        //  rep=listeBadge;
        cb(listeBadge);
    });

}
module.exports.save=function(intitule,moyenne,url,cb){
    new  Badge({_id:objectId,name  :  intitule,  moyenne  :  moyenne,  image_url:url}).save(function(err, site) {
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
module.exports.update=function(id,data,cb){

    Badge.findByIdAndUpdate(id, data, function (err, post) {
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

