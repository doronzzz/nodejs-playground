var parser = require('./index.js');
var test = require('tape');


test('Convert URL string to JS object', function (t) {
	var testUrl = "http://www.node.org/docs/index.html";
	var parsedUrl = parser.parse(testUrl);
    t.plan(2);
    t.equal(parsedUrl.port, 80,'Got port 80 as the default port');
    t.equal(parsedUrl.file,'index.html','Got index.html for the file name');
});