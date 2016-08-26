var app = require('express')();
var sopen = require('fs').createReadStream;
var parse = require('url').parse;
var path = url => parse(url).pathname;
var unslash = path => path.slice(1).replace(/\//g, '.');
var file = req => './mock/' + unslash(path(req.url)) + '.' + req.method + '.json';

app.all('*', function(req, res) {
    try { sopen(file(req)).on('error', () => res.sendStatus(404)).pipe(res); }
    catch(err) { res.sendStatus(500); }
});

app.listen(process.env.TINY_PORT || 8000);
