/**
 * Created by Njara on 02/02/2015.
 */


var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Usercollection = new Schema({
    _id: ObjectId,
    username : String,
    email : String
});
module.exports=mongoose.model('usercollection', Usercollection,'usercollection');

