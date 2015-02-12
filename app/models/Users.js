/**
 * Created by Njara on 08/02/2015.
 */
var mongoose = require('mongoose');
var BadgeType = require('./Badge').Badge;
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = new Schema({
    _id: ObjectId,
    pseudo: String,
    email: String,
    image_url: String,
    badge_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Badge'}

})

module.exports=mongoose.model('User', User,'User');