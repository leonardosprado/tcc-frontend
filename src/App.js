import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Routes from './routes'
// import Draggable from './pages/Draggable';
// import Home from './pages/Home';

function App() {
  
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    
  );
}

export default App;
