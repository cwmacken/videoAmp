// Load all dependencies
require( './db' );
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var http = require( 'http' );
var app = express();
var mongoose = require( 'mongoose' );
var Page = mongoose.model( 'Page' );

// Set port
app.set('port', (process.env.PORT || 3000));

// Enable loading staic pages
app.use('/', express.static(path.join(__dirname, 'public')));

// Use body parser for JSON
app.use(bodyParser.json());

// Route for data
app.post('/dataIntake', function(req, res){

    // Assign data from client queries to page schema and then save it to datastore identified in db.js
    new Page({
      ads    : req.body.ads,
      length  : req.body.length,
      elerrors : req.body.errors
    }).save( function( err, page, count ){
      // print any errors and/or page object saved
      console.log(err);
      console.log(page);
    });

});

// Create server and set port established above
http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});
