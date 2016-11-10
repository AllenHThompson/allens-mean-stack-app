/* REQUIRE EXPRESS MODULE*/
var express = require('express');
var app = express();
/* ADDED BODY PARSER B/C NOT ALLOWED ACCES*/
var bodyParser = require('body-parser');

/* GLOBAL VARIABLES*/
var colorOptions = ['red', 'yellow', 'green', 'blue', 'orange'];

/* ROUTES */
app.get('/options', function(request, response) {
     response.json(colorOptions);
});

/* SERVER SETUP */
app.listen(8000, function() {
     console.log('listening on port 8000');
});
