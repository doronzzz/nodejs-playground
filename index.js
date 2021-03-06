"use strict";

var exports = module.exports = {};
var Url = require('url');

exports.parse = function(str){
	var url = Url.parse(str);

	if(url.hostname === null){
		return null;
	}
	
	if(url.port === null){
		url.port = 80;
	}

	url.file = url.path.substr(url.path.lastIndexOf('/') + 1,url.path.length);
	url.path = url.path.substr(0,url.path.lastIndexOf('/') + 1);
	url.url = url.href;

	return {
		url:url.url,
		host:url.host,
		path:url.path,
		file:url.file,
		port:url.port
	};
}
