var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Page = new Schema({
	ads	:Array,
	length:Number,
	anyerrors: Array
});

mongoose.model( 'Page', Page );
mongoose.connect( 'mongodb://localhost/videoamp' );