const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render();
});


const server = app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

const io = require('socket.io').listen(server);

let cacheData;
io.on('connection', (client) => {
  console.log('connected');
  if (cacheData) {
    client.emit('action', cacheData);
  }
  client.on('state', data => {
    if (data.type === 'INCREMENT') {
      console.log(data);
      cacheData = data;
      client.broadcast.emit('action', data);
    }
  });
  client.on('disconnect', () => console.log('disconnected'));
});
