/**
 * Created by Njara on 13/02/2015.
 */
var  ThemeDao=require('../dao/ThemeDao');
//var  TypeThemeDao=require('../models/TypeThemeDao');
var mongoose = require('mongoose');
module.exports.getThemeCourant= function(cb){
     ThemeDao.getThemeCourant(function(listeTheme){
      // if(err) return console.error("sssssssssssssssssssssss");
       // testDateTheme(null,null,listeTheme);

        cb(listeTheme);
        //cb(listeTheme);
    });
   // return listeTheme;

}
