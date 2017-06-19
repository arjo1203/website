'use strict';

var express = require('express');
var app = express();
var PORT = 8080;

app.use('/', express.static(__dirname + "/public"));
app.listen(PORT);
console.log("Server: On " + PORT);
