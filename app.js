var express = require('express')
var app = express();
var fs = require('fs')
var request = require('request')
var router = express.Router();
var http = require('http');


// var destination = fs.createWriteStream('./file.json')
app.get('/', function(req, res) {
	    var that = res;
		request('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json', 
			function(err, res, body) {
			if (!err && res.statusCode == 200) {
				console.log("body")
				that.json(JSON.parse(body));
					//return body;
					//.json(JSON.parse(body))
			}
			// 	res.json(JSON.parse(body))
		})
	})
	//.pipe(destination)
	//   .on('err',function(err){
	//   	console.log(err);
	//   })

app.listen(3000)