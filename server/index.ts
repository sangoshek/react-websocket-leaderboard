import { WebSocketServer } from 'ws';
const WS_PORT = 9080;
const wss = new WebSocketServer({ port: WS_PORT });

wss.on('connection', function connection(ws) {
  console.log(`websocket server is running on ${WS_PORT}`)
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    ws.send(data);
  });  
});