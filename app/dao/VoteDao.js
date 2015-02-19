/**
 * Created by Njara on 12/02/2015.
 */
var  Users=require('../models/Users');
var Vote=require('../models/Vote');
var Theme=require('../models/Theme');
//var  TypeThemeDao=require('../mode  ls/TypeThemeDao');
var mongoose = require('mongoose');
var moment = require("moment");
module.exports.findAll= function(data,cb){
    Vote.find(data).populate('user_id').populate('photos_id').exec(function(err,cb1){
        if(err) return console.error( err);

        cb( cb1);
    });

}
module.exports.findById=function(id,cb){

    Vote.findById(id,function (err, user) {
        if (err) return console.error(err);
        //console.dir(listeBadge);
        //  rep = listeBadge;
        //  console.dir(rep);
        //  rep=listeBadge;
        cb(user);
    });

}
module.exports.save=function(data,cb){

    new  Vote(data).save(function(err, site) {
        if(err) {
            cb(true);
            console.dir(err);
        }
        else {
            
            cb(false);
        }

    });

}
module.exports.update=function(data,cb){

    Vote.findByIdAndUpdate(id, data, function (err, post) {
        if (err) return next(err);
        // res.json(post);
        else   cb(true);
    });

}
module.exports.delete=function(id,cb){

    Vote.findByIdAndRemove( id, function(err) {
        if (err) return console.dir(err);
        // res.json(post);
        else  cb(true);

    });

}