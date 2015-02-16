/**
 * Created by Njara on 08/02/2015.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Badge = new Schema({
    _id: ObjectId,
    name : String,
    moyenne : Number,
    image_url:String
});
module.exports.Badge=Badge;
module.exports=mongoose.model('Badge', Badge,'Badge');
