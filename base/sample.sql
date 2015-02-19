use  pictura;
db.createCollection("Badge",{autoIndexId:true});
/* 0 */
{
    "_id" : ObjectId("54d7867573a8651b8969649c"),
    "name" : "amateur",
    "moyenne" : 35,
    "image_url" : ""
}

/* 1 */
{
    "_id" : ObjectId("54d9a44bd1dbeefc2913f8ce"),
    "name" : "Pro",
    "moyenne" : 50,
    "__v" : 0
}

/* 2 */
{
    "_id" : ObjectId("54da082c7af816f8303fca57"),
    "name" : "Debutant",
    "moyenne" : 10,
    "__v" : 0
}
db.createCollection("Photos",{autoIndexId:true});
{
    "_id" : ObjectId("54e1fbe3712ad4d4f7f9e1be"),
    "title" : "moi et lui",
    "description" : "",
    "date_publi" : "2015-02-12",
    "vote" : 3,
    "image_url" : "frontend/img/upload/image_0026",
    "user_id" : ObjectId("54e1fae4712ad4d4f7f9e1bc"),
    "theme_id" : ObjectId("54e4a40618aaedd1d6866b7b")
}



















----------------------------------------------------

db.createCollection("TypeTheme",{autoIndexId:true});
db.TypeTheme.insert(
{"title":"St Valentin","description":"amour","avis":0,"image_url":""}
);
db.TypeTheme.insert(
{"title":"Carnavale ","description":"deguisement","avis":0,"image_url":""}
);




db.createCollection("Theme",{autoIndexId:true});
db.Theme.insert(
    {"typetheme":{"title":"St Valentin","description":"amour","avis":0,"image_url":""},
    "date_debut":new Date('Jun 14, 2015'),
    "date_fin":new Date('Jun 20, 2015')
    }
);
db.Theme.insert(
    {
    "typetheme":{"title":"Carnavale ","description":"deguisement","avis":0,"image_url":""},
    "date_debut":new Date('2015-06-21'),
    "date_fin":new Date('2015-06-28')
    }
);





db.createCollection("Favoris",{autoIndexId:true});

db.Theme.find(
{
    "date_debut":{$lt:new Date('2015-06-18')},
    "date_fin":{$gte:new Date('2015-06-18')}
}
);
db.createCollection("Badge",{autoIndexId:true});
db.Badge.insert(
    {"name":"amateur", "moyenne":50,"image_url":""}
    );
db.createCollection("User",{autoIndexId:true});
db.User.insert(
{"pseudo":"Njara","email":"njaraliantsoa@gmail.com","image_url":"",
    "mdp":"azerty",
  "badge_id":"54d7867573a8651b8969649c"}
);
db.User.insert(
{"pseudo":"Tojo","email":"tojoantonio@gmail.com","image_url":"",
    "mdp":"azerty",
  "badge_id":"54d7867573a8651b8969649c"}
);

db.createCollection("Photos",{autoIndexId:true});
  db.Photos.insert(
  {"title":"moi et lui", "description":"","date_publi":new Date('2015-02-12'),"vote":3,"image_url":"",
      "user_id":"54e1fae4712ad4d4f7f9e1bc",
      "theme_id":"54ddd132e438abc33d8cfca4"
  }
 );


 [ { _id: 54e1fbe3712ad4d4f7f9e1be,
     title: 'moi et lui',
     description: '',
     date_publi: '2015-02-12',
     vote: 3,
     image_url: '',
     user_id:
      { _id: 54e1fae4712ad4d4f7f9e1bc,
        pseudo: 'Njara',
        email: 'njaraliantsoa@gmail.com',
        image_url: '',
        mdp: 'azerty',
        badge_id: 54d7867573a8651b8969649c },
     theme_id:
      { _id: 54ddd132e438abc33d8cfca4,
        title: 'St Valentin',
        description: 'amour',
        avis: 0,
        image_url: '',
        date_debut: Sun Jun 14 2015 00:00:00 GMT+0200 (Paris, Madrid (heure d'été)),
       date_fin: Sat Jun 20 2015 00:00:00 GMT+0200 (Paris, Madrid (heure d'été)) } } ]