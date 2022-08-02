import { useState, useRef, useEffect} from "react";

const initWebSocketUrl = `ws://localhost:9080`;
const ws = new WebSocket(initWebSocketUrl);

const useWebSocket = (): any => {
  const message = useRef<string|null>('');

  const sendMessage = (msg: any):void => {
    ws.send(JSON.stringify({msg}));
  }

  useEffect(()=>{
    ws.onopen = () => {         
      ws.send(JSON.stringify({
          message: "connected",
      }));    
    };
    ws.onmessage = e => {
      e.data && e.data.text().then((text: any) => {
        message.current = text
        console.log('text',text)
      })
    }  

  },[ws])

  return [message, sendMessage];
};

export default useWebSocket;
