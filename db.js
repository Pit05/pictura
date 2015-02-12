/**
 * Created by Njara on 03/02/2015.
 */
var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Comment = new Schema({
    username : String,
    content  : String,
    created  : Date
});

mongoose.model( 'Comment', Comment );

mongoose.connect( 'mongodb://localhost/test' );