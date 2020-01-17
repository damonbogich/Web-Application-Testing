import React, { useState } from 'react';
import Display from './Components/Display';
import Dashboard from './Components/Dashboard'


function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  // const [foul, setFoul] = useState(0);
  // const [hit, setHit] = useState(0);

  const addBall = () => {
    if(balls > 3){
      setBalls(0);
      setStrikes(0)
  } else {
    
      setBalls(balls + 1)
  }
}

const addStrike = () => {
  if(strikes >= 2) {
    
      setStrikes(0);
      setBalls(0)
  } else{
    
      setStrikes(strikes + 1)
  }
}

const addFoul = () => {
      if (strikes < 2) {
        
        setStrikes(strikes + 1)
      } 
  
} 

const addHit = () => {
  
      setStrikes(0);
      setBalls(0);
  
}

  return (
    <div className="App">
      <Display
      balls = {balls}
      strikes = {strikes}
      />
      <Dashboard
      addBall = {addBall}
      addStrike = {addStrike}
      addFoul = {addFoul}
      addHit = {addHit}
      
      />
    </div>
  );
}

export default App;
