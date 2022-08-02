import React from 'react';
import './App.css';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import { store } from './store/store';
import { Provider } from 'react-redux'

function App() {  
  return (
    <Provider store={store}>
      <LeaderBoard/>
    </Provider>
  );
}

export default App;
