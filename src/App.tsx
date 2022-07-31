import React from 'react';
import './App.css';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import useWebSocket from './hooks/useWebSocket';

function App() {
  const [message, sendMessage] = useWebSocket();
  // const WebSocketUrl = `ws://localhost:9080`;
  // const ws = new WebSocket(WebSocketUrl);
  // ws.binaryType = "blob";

  // ws.onopen = () => {  
  //   console.log('connected')        
  //   ws.send(JSON.stringify({
  //       message: "hello world",
  //   }));         
  // };

  // ws.onmessage = e => {
  //     if (e.data) {
  //     const message = e.data;
  //     if (message instanceof Blob) {
  //         const reader = new FileReader();
  //         reader.onload = () => {
  //             console.log("Result: " + reader.result);
  //         };
  //         reader.readAsText(message);
  //     } else {
  //         console.log("Result: " + message);
  //     }
  //   }
  // }        

  // const sendMsg = ()=>{
  //   ws.send(JSON.stringify({
  //     message: "send",
  //   }));        
  // }
  return (
    <>
      <LeaderBoard/>
      {message}
      <button onClick={() => sendMessage(`hello`)}>send</button>
    </>
  );
}

export default App;
