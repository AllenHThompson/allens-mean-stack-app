/* REQUIRE EXPRESS MODULE*/
var express = require('express');
var app = express();

/* ADDED BODY PARSER B/C NOT ALLOWED ACCES*/
var bodyParser = require('body-parser');
/* ADDED CORS TO DO A CROSS DOMAIN REQUEST*/
var cors = require('cors');

app.use(cors());

/* GLOBAL VARIABLES*/
var colorOptions = ['red', 'yellow', 'green', 'blue', 'orange', 'purple'];

/* ROUTES */
app.get('/options', function(request, response) {
     response.json(colorOptions);
});

/* SERVER SETUP */
app.listen(8000, function() {
     console.log('listening on port 8000');
});
