/**
 * Created by Sandeep on 01/06/14.
 */

// Load Our Modules

var express = require('express');
var bodyParser = require('body-parser');
var recipe = require('./routes/recipe');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

//connect to our database
//Ideally you will obtain DB details from a config file

var dbName='recipeDB';

var connectionString='mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', recipe);

module.exports = app;
