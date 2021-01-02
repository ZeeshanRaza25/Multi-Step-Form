import React from 'react';
import './App.css';
import MuliStep from './components';

function App() {
  return (
    <div className="App">
      <div>
        <h3 style={{textTransform: 'uppercase',color: '#673AB7',  fontWeight: 'normal'}}>
          Sign Up Your User Account
        </h3>
        <h5 style={{fontWeight: 'lighter'}}>Fill all form field to go to next step</h5>
      </div>
      <div style={{width: '60%', margin: '0 auto'}}>
        <MuliStep />
      </div>
    </div>
  );  
}

export default App;