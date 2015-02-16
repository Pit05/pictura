/**
 * Created by Njara on 12/02/2015.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var TypeTheme = new Schema({
    _id: ObjectId,
    title: String,
    description: String,
    avis: Number
})
module.exports.TypeTheme=TypeTheme;
module.exports=mongoose.model('TypeTheme', TypeTheme,'TypeTheme');
