/**
 * Created by Njara on 16/02/2015.
 */
/**
 * Created by Njara on 08/02/2015.
 */
var  Users=require('../models/Users');
var Photos=require('../models/Photos');
var Theme=require('../models/Theme');
//var  TypeThemeDao=require('../mode  ls/TypeThemeDao');
var mongoose = require('mongoose');
var moment = require("moment");
module.exports.findImage=function(data,cb){

    Photos.find(data).populate('user_id').populate('theme_id').exec(function(err,cb1){
        if(err) return console.error( err);

        cb( cb1);
    });
}
module.exports.getListImageNow=function(cb){
    var now =moment(new Date());


    var data={
        "date_publi":new Date(now.format("YYYY-MM-DD"))


    };
    Photos.find(data).populate('user_id').populate('theme_id').exec(function(err,cb1){
        if(err) return console.error( err);

        cb( cb1);
    });
}

module.exports.findAll= function(cb){
    Photos.find({}).populate('user_id').populate('theme_id').exec(function(err,cb1){
        if(err) return console.error( err);

            cb( cb1);
    });

}
module.exports.findById=function(id,cb){

    Users.findById(id,function (err, user) {
        if (err) return console.error(err);
        //console.dir(listeBadge);
        //  rep = listeBadge;
        //  console.dir(rep);
        //  rep=listeBadge;
        cb(user);
    });

}
module.exports.save=function(data,cb){

    new  Users(data).save(function(err, site) {
        if(err)  console.error(err);
        else  cb(true);

    });

}
module.exports.update=function(data,cb){

    Users.findByIdAndUpdate(id, data, function (err, post) {
        if (err) return next(err);
        // res.json(post);
        else   cb(true);
    });

}
module.exports.delete=function(id,cb){

    Users.findByIdAndRemove( id, function(err) {
        if (err) return console.dir(err);
        // res.json(post);
        else  cb(true);

    });

}
