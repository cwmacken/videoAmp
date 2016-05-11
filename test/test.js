var request = require("request"),
	assert = require('assert');
var chai = require('chai');
var should = chai.should();
var base_url = "http://localhost:3000/";
var post_url = "http://localhost:3000/dataIntake";

var server = require("../server.js");

describe("Index Test", function(){

	describe("GET /", function() {

		it("returns status code 200", function(done) {

			request.get(base_url, function(error, response, body) {

				assert.equal(200, response.statusCode);
				done();

      		});

	    });

	    it("has ad.html in body", function(done) {
      		request.get(base_url, function(error, response, body) {
        		body.should.include('<iframe src="./ad.html"');
        		done();
      		});
    	});

	});

});

describe("POST Test", function(){

	describe('POST /dataIntake', function() {

	  	it('should respond with success', function(done) {

	  		request.post({
  				headers: {'content-type' : 'application/json'},
  				url:     post_url,
  				body:    '{"ads":[{"type":"video - flash","width":"300","height":"250"},{"type":"img","width":300,"height":250},{"type":"img","width":160,"height":600},{"type":"img","width":300,"height":250},{"type":"img","width":300,"height":250},{"type":"video","width":200,"height":200},{"type":"img","width":300,"height":250}],"length":7,"errors":[]}'
			}, function(error, response, body){
  				body.should.include('success');
  				done();
			});

	  	});

	});


});


