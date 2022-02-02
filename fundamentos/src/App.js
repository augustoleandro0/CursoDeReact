import React from 'react';
import './App.css';

import Routes from '../src/routes';
import Navigation from './Components/Navigation';


function App() {
  return (

    <div className="App">
  
      <Navigation/>
        
      <Routes/>
    
    </div>
  
  );
}

export default App;
