/**
 * Created by Njara on 20/02/2015.
 */
var mongoose = require('mongoose');
//var photoDao=require('/PhotoDao');
var  photosDao=require('../../dao/PhotosDao');
module.exports = function(app) {
    app.get('/ListePhotoPublier', function (req, res){
            photosDao.getListImageNow(function(cb){
                   // console.dir(cb);
                   res.json(cb);
            });
    });
}