use  pictura;



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




db.createCollection("Photos",{autoIndexId:true});
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

