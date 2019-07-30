import React from 'react';
import './App.css';
import ClickCounter from './components/clickCounter';
import HoverCounter from './components/hoverCounter'

function App() {
  return (
    <div className="App">
      <ClickCounter name="Nagee" />
      <HoverCounter />
    </div>
  );
}

export default App;
