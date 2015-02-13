/**
 * Created by Njara on 13/02/2015.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Commentaire = new Schema({
    _id: ObjectId,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    photos_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Photos'},
    commentaire:String,
    date:Date

})

module.exports=mongoose.model('Commentaires', Commentaire,'Commentaires');