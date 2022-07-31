import { useState } from "react";

const initWebSocketUrl = `ws://localhost:9080`;
const ws = new WebSocket(initWebSocketUrl);
ws.binaryType = "blob";

ws.onopen = () => {         
  ws.send(JSON.stringify({
      message: "connected",
  }));    
};

const useWebSocket = (): any => {
  const [message, setMessage] = useState<string>('');

  const sendMessage = (msg: any):void => {
    ws.send(JSON.stringify({
        message: msg,
      }));  
  }

  ws.onmessage = e => {
      if (e.data) {
      const message = e.data;
      if (message instanceof Blob) {
          const reader = new FileReader();
          reader.onload = (e) => {
              console.log("Result: " +  e.target?.result);
              setMessage(e.target?.result as string)
          };
          reader.readAsText(message);
      } else {
          console.log("Result: " + message);
          setMessage(message)
      }
    }
  }        

  return [message, sendMessage];
};

export default useWebSocket;
