/**
 * Created by Njara on 09/02/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var TypeTheme = require('./TypeTheme').TypeTheme;
var Theme = new Schema({
    _id: ObjectId,
    typetheme:[TypeTheme],
    date_debut: Date,
    date_fin: Date
})
module.exports=mongoose.model('Theme', Theme,'Theme');
