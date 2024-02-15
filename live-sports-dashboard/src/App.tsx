// src/App.tsx
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Scoreboard from './components/Scoreboard/Scoreboard';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="dashboard">
        <Sidebar />
        <Scoreboard />
        {/* MatchDetail can be integrated into Scoreboard or used as a modal/pop-up */}
      </div>
    </div>
  );
}

export default App;
