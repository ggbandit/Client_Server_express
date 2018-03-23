var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');


app.use(express.static('public'));

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});
app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!!!!!')
});
app.get('/foo', function (req, res) {
    res.send('Foo')
});
// a middleware with no mount path; gets executed for every request to the app
app.get('/user/id', function (req, res) {
    res.send('Get Page')
});
app.get('/omg', function (req, res) {
    res.send('OMG!!!!')

});
bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static(__dirname + '/public'));

app.post('/add', urlencodedParser, function (req, res) {
    var result = parseInt(req.body.a) + parseInt(req.body.b);
    res.send('Result = ' + result);
    console.log('a = '+req.body.a);
    console.log('b = '+req.body.b);
});

app.use(cookieParser('keyboard cat'))

app.get('/ck_get', function(req, res) {
    res.send(req.cookies)
})

app.get('/ck_set', function(req, res) {
    res.cookie('a', 10)
    res.send('ok')
})

app.listen(8000);
console.log('Server is ready!');