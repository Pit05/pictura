/**
 * Created by Njara on 13/02/2015.
 */
/**
 * Created by Njara on 16/02/2015.
 */
/**
 * Created by Njara on 08/02/2015.
 */
var  Users=require('../models/Users');
var Photos=require('../models/Photos');
var commentaire=require('../models/Commentaires');
//var  TypeThemeDao=require('../mode  ls/TypeThemeDao');
var mongoose = require('mongoose');
var moment = require("moment");
module.exports.findAll=function(data,cb){

    commentaire.find(data).populate('photos_id').populate('user_id').exec(function(err,cb1){
        if(err) return console.error( err);
        cb(cb1);
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


module.exports.findById=function(id,cb){

    Photos.findById(id,function (err, user) {
        if (err) return console.error(err);
        //console.dir(listeBadge);
        //  rep = listeBadge;
        //  console.dir(rep);
        //  rep=listeBadge;
        cb(user);
    });

}
module.exports.save=function(data,cb){

    new  commentaire(data).save(function(err, site) {
        if(err)  console.error(err);
        else  cb(true);

    });

}
module.exports.update=function(id,data,cb){

    Photos.findByIdAndUpdate(id, data, function (err, post) {
        if (err) return next(err);
        // res.json(post);
        else   cb(post);
    });

}
module.exports.delete=function(id,cb){

    Users.findByIdAndRemove( id, function(err) {
        if (err) return console.dir(err);
        // res.json(post);
        else  cb(true);

    });

}
