import React from 'react';



const Display = ({balls, strikes, foul, hit}) => {


  return (
    <div className="batter">
      <section className = "balls">
          <h1>Balls: {balls}</h1>
      </section>
      <section className = "strikes">
          <h1>Strikes: {strikes}</h1>
      </section>
    </div>
  );
}

export default Display;