var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

//create some new routing information
//what resources we are trying to access on this server. 
//create a route called projects
var projects = require('./routes/projects');


var app = express(); 

// view engine setup
app.set('views', path.join(__dirname, 'views')); //templates sitting inside folder called views 
app.set('view engine', 'jade'); //using jade for templating

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json()); //when a request comes in, it breaks it up into little pieces 
app.use(bodyParser.urlencoded());
app.use(cookieParser()); //similar to request, grabs cookie header and breaks it down into usable pieces
app.use(express.static(path.join(__dirname, 'public'))); //serves static files. creates what you think you might need, add to it as you go along. 

app.use('/', routes); //use the functions that are in the routes object. Look inside routes file to find out what you are supposed to be doing  //app.use, bits of the package you want to use. 
app.use('/users', users); //in the users routes file, define paths but everything is relative to /users. 
//routing going on it two places, if path starts with users, goes to users routing file, otherwise go to the index routing file. 

app.use('/projects', projects); //new section /things create more than just an indiviual page



/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.get('*', function(req, res) {
        res.sendfile('../public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

module.exports = app; //
