/**
 * Created by Njara on 12/02/2015.
 */
var mongoose = require('mongoose');
var BadgeType = require('./Badge').Badge;
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Vote = new Schema({
    _id: ObjectId,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    photos_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Photos'}

})

module.exports=mongoose.model('Vote', Vote,'Vote');