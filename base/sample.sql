use  pictura;
db.createCollection("Badge",{autoIndexId:true});
db.Badge.insert({name:"amateur", moyenne:50,image_url:""});

db.createCollection("User",{autoIndexId:true});
db.User.insert({nom:"Fidimanana",prenom:"Njara",email:"njaraliantsoa",image_url:"",badge_id:"54d7867573a8651b8969649c"});


db.createCollection("Theme",{autoIndexId:true});
db.createCollection("Photos",{autoIndexId:true});
db.createCollection("Favoris",{autoIndexId:true});
