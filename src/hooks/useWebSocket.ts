import { useState, useRef, useEffect} from "react";

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
  const [counter, setCounter] = useState<number>(0);

  const sendMessage = (msg: any):void => {
    ws.send(JSON.stringify({msg}));  
    setCounter((counter) => counter++)
  }
  
  useEffect(()=> {
    ws.onmessage = e => {
        if (e.data) {
        const message = e.data;
        if (message instanceof Blob) {
            const reader = new FileReader();
            reader.onload = (e) => {  
                console.log("Result: " + e.target?.result);   
                const msg: string = JSON.parse(e.target?.result as any)         
                setMessage(msg)
            };
            reader.readAsText(message);
        } else {
            console.log("Result: " + message);
            setMessage(message)
        }
      }
    }   
  },[counter])     

  return [message, sendMessage];
};

export default useWebSocket;
