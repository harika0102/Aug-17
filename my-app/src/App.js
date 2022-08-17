import React from 'react';
import './App.css';
import Comp1 from './components/Comp1';
import CompA from './components/CompA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CompA/>
        <Comp1/>
      </header>
    </div>
  );
}

export default App;
