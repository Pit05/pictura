var mongoose = require('mongoose');
module.exports = function(app) {
    app.get('/profile', function (req, res){
        res.render('frontend/pages/profile');
    });
}