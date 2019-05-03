console.log('Server-side code running');
const http = require('http');
const port= process.env.PORT || 3000
const express = require('express');
const app = express();

// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080 // change to port for heroku
app.listen(port, () => {
  console.log('listening on 8080');
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
