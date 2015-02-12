/**
 * Created by Njara on 16/02/15.
 */
var mongoose = require('mongoose');
var BadgeType = require('./Badge').Badge;
var user = require('./Users').User
var theme = require('./Theme').Theme;
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Photos = new Schema({
    _id: ObjectId,
    title: String,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    image_url: String,
    description:String,
    date:String,
    vote:Number,
    theme_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Theme'}

})

module.exports=mongoose.model('Photos', Photos,'Photos');