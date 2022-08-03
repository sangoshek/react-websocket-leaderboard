import { useState, useRef, useEffect} from "react";

const initWebSocketUrl = `ws://localhost:9080`;

const useWebSocket = (): any => {
  const message = useRef<string|null>('');
  const [counter, setCounter] = useState<number>(0);
  const ws = new WebSocket(initWebSocketUrl);

  const sendMessage = (msg: any):void => {
    ws.onopen = () => {  
      console.log('connected');
    };
    ws.send(JSON.stringify({msg}));
    setCounter(counter=>counter++)
  }
  
  useEffect(()=>{
    ws.onopen = () => {  
      console.log('connected');
    };

    ws.onmessage = e => {   
      message.current = e.data   
      e.data && e.data.text().then((text: any) => {  
        console.log('text',text)
        
      })
    }  
  },[ws])

  return [message, sendMessage, ws];
};

export default useWebSocket;
