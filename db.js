// Load all dependencies
var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

//  Create schema to send to Mongo DB
var Page = new Schema({
	ads	:Array,
	length:Number,
	anyerrors: Array
});

// Create model to assign data from client
mongoose.model( 'Page', Page );

// Point server to database, this data store happens to be local but you could also point this to a remote datastore...like mlab.com (formerly Mongolab)
mongoose.connect( 'mongodb://localhost/videoamp' );