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
    badge:[BadgeType]

})

module.exports=mongoose.model('User', User,'User');