const express = require('express');
const app = express();
const mongodb = require('./mongodb.js');
const config = require('./config.js');
const bodyParser= require('body-parser')
var db

/** parse application/json **/
app.use(bodyParser.json())

mongodb.connectToServer( function( err ) {
  app.listen(config.server.port, function() {
     console.log('Node server listening on ' + config.server.port);
     db = mongodb.getDb();
  })
});


app.use(express.static(__dirname + '/public'));

app.get('/employee/get', function(req, res){
  db.collection('employees').find().toArray(function(err, results) {
  res.send(results);
  })
  res.set({
    'Cache-Control': 'no-cache'
  });
});

app.post('/employee/create', (req, res) => {
  db.collection('employees').save(req.body, (err, result) => {
    if (err) return console.log(err)
    res.send('Employee created!');
  })
})

app.delete('/employee/delete', (req, res) => {
  db.collection('employees').findOneAndDelete({name: req.body.name},
  (err, result) => {
    if (err) return res.send(500, err)
    res.send('Employee deleted!')
  })
})
