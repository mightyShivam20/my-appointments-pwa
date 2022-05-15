import React from 'react';
import './App.css';


import oxar from './assets/img/oxar-logo2.png';
import Home from './components/Home/Home.js';

function App() {
  return (
    <div className="App">
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center justify-content-between">
          <a className="logo d-flex align-items-center">
            <img src={oxar} alt="" />
          </a>
        </div>
      </header>
      <Home />
    </div>
  );
}

export default App;
