var mongoose = require('mongoose');
var  PhotosDao=require('../../dao/PhotosDao');
var ThemeService=require('../../service/ThemeService');
module.exports = function(app) {
    app.get('/', function (req, res) {

        var data=[ { _id: '54e4c519edf460b009622a20',
            title: 'moi et lui',
            description: 'image cool',
            date_publi: 'Thu Feb 12 2015 01:00:00 GMT+0100 (Paris, Madrid)',
            vote: 3,
            image_url: '../frontend/img/image_0073-480x809.jpg',
            user_id:
            { _id: '54e1fae4712ad4d4f7f9e1bc',
                pseudo: 'Njara',
                email: 'njaraliantsoa@gmail.com',
                image_url: '',
                mdp: 'azerty',
                badge_id: '54d7867573a8651b8969649c' },
            theme_id:
            { _id: '54ddd132e438abc33d8cfca4',
                title: 'Test',
                description: 'Testez notre application',
                avis: 0,
                image_url: '../frontend/img/image_0073-480x809.jpg',
                date_debut: 'Sun Jun 14 2015 00:00:00 GMT+0200 (Paris, Madrid)',
                date_fin: 'Sat Jun 20 2015 00:00:00 GMT+0200 (Paris, Madrid)' } },{ _id: '54e4c519edf460b009622a20',
            title: 'moi et lui',
            description: 'test',
            date_publi: 'Thu Feb 12 2015 01:00:00 GMT+0100 (Paris, Madrid)',
            vote: 3,
            image_url: '../frontend/img/image_0073-480x809.jpg',
            user_id:
            { _id: '54e1fae4712ad4d4f7f9e1bc',
                pseudo: 'Njara',
                email: 'njaraliantsoa@gmail.com',
                image_url: '../frontend/img/image_0073-480x809.jpg',
                mdp: 'azerty',
                badge_id: '54d7867573a8651b8969649c' },
            theme_id:
            { _id: '54ddd132e438abc33d8cfca4',
                title: 'Test',
                description: 'Testez notre application',
                avis: 0,
                image_url: '',
                date_debut: 'Sun Jun 14 2015 00:00:00 GMT+0200 (Paris, Madrid)',
                date_fin: 'Sat Jun 20 2015 00:00:00 GMT+0200 (Paris, Madrid)' } },{ _id: '54e4c519edf460b009622a20',
            title: 'moi et lui',
            description: 'test',
            date_publi: 'Thu Feb 12 2015 01:00:00 GMT+0100 (Paris, Madrid)',
            vote: 3,
            image_url: '../frontend/img/image_0073-480x809.jpg',
            user_id:
            { _id: '54e1fae4712ad4d4f7f9e1bc',
                pseudo: 'Njara',
                email: 'njaraliantsoa@gmail.com',
                image_url: '../frontend/img/image_0073-480x809.jpg',
                mdp: 'azerty',
                badge_id: '54d7867573a8651b8969649c' },
            theme_id:
            { _id: '54ddd132e438abc33d8cfca4',
                title: 'Test',
                description: 'Testez notre application',
                avis: 0,
                image_url: '',
                date_debut: 'Sun Jun 14 2015 00:00:00 GMT+0200 (Paris, Madrid)',
                date_fin: 'Sat Jun 20 2015 00:00:00 GMT+0200 (Paris, Madrid)' } } ]

        var theme="Theme 1";
        var isconnecter=false;
        if(req.session.user){
            isconnecter=true;
        }
        PhotosDao.findAll(function(cb1){
            ThemeService.getThemeCourant(function(th){
                res.render('frontend/pages/accueil',{data:cb1,theme:th.titre,isconnecter:isconnecter,utilisateur:req.session.user});
            });

        });



    });
    app.get('/photo', function (req, res){
        res.render('frontend/pages/photo');
    });

}

