
require( './db' );
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var http = require( 'http' );
var app = express();
var mongoose = require( 'mongoose' );
var Page = mongoose.model( 'Page' );

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/dataIntake', function(req, res){

    new Page({
      ads    : req.body.ads,
      length  : req.body.length,
      elerrors : req.body.errors
    }).save( function( err, page, count ){
      console.log(err);
      console.log(page);
    });

});

http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});
