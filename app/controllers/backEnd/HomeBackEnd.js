/**
 * Created by Njara on 09/02/2015.
 */
var mongoose = require('mongoose');
module.exports = function(app) {
    app.get('/admin/home', function (req, res) {
        /* var  thor=new  UserCollection({username:"rrrrrr"});
         //   res.send('exemple/54d0afe1090352502727cf22',thor);
         UserCollection.find(function(err, movies) {
         if (err) return console.error(err);
         console.dir(movies);
         res.render('pages/chat', {movies: movies});

         });*/
        res.render('backEnd/pages/badgeView');
        /*var  re;
         badgeDao.findAll(function(cb){
         console.dir(cb);
         }
         );*/
        //require('./controllers/BadgeRouter.js')(app);


    });
}

