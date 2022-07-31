import React from 'react';
import './App.css';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import useWebSocket from './hooks/useWebSocket';
import { store } from './store/store';
import { Provider } from 'react-redux'

function App() {
  const [message, sendMessage] = useWebSocket();
  
  return (
    <Provider store={store}>
      <LeaderBoard/>
      {message}
      <button onClick={() => sendMessage(`hello`)}>send</button>
    </Provider>
  );
}

export default App;
