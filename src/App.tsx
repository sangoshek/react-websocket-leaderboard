import React from 'react';
import './App.css';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import useWebSocket from './hooks/useWebSocket';
import { playerInfo } from './mock/players';

function App() {
  const [message, sendMessage] = useWebSocket();
  
  return (
    <React.Fragment>
      <LeaderBoard data={playerInfo}/>
      {message}
      <button onClick={() => sendMessage(`hello`)}>send</button>
    </React.Fragment>
  );
}

export default App;
