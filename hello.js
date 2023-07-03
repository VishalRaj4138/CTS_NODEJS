var http = require('http');

//Server Request
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.end('<h1>Hello World!! My name is Vishal!');
// }).listen(8080);



//URL Manipulation Using URL
var url = require('url');
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/html'});
//     var q = url.parse(req.url, true).query;
//     var dates = q.year + " " + q.month;
//     res.end(dates);
// }).listen(8080);


//File System
var fs = require('fs');

// http.createServer(function(req, res){
//     fs.readFile('index.html',function(err, data){
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.write(data)
//     res.end();
//     });
// }).listen(8080);



http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    if(filename =='./'){
        filename = './index';
    }

    filename = filename + '.html';
    console.log(filename);
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);