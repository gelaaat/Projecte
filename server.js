const express = require('express');
const app = express();
const WebSocket = require('ws');
const PORT = process.env.PROT || 8000;
const portWebSocket = 8080;

                                                                               
console.log("Intentar connectar el paquet WebSocket");
const wss = new WebSocket.Server({ port:portWebSocket });
console.log("...Fet!");

wss.on('connection', function connection(ws) {
  console.log('Nova connexió de l\'adreça remota ' + ws._socket.remoteAddress + ':' + ws._socket.remotePort);

  ws.on('message', function incoming(message) {
    console.log(message.toString());
    
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });

  });
  npm
});


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});

app.listen(PORT, () => {
    console.log(`Escoltant al port ${PORT}`)
});
