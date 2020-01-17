import React, { useState } from 'react';

const Dashboard = props => {
    // const [balls, setBalls] = useState(0);
    // const [strikes, setStrikes] = useState(0);
    // const [foul, setFoul] = useState(0);
    // const [hit, setHit] = useState(0);

    // //balls:
    // if(balls > 3){
    //     setBalls(0);
    //     setStrikes(0)
    // } else {
    //     setBalls(balls + 1)
    // }

    // //strikes:
    // if(strikes > 2) {
    //     setStrikes(0);
    //     setBalls(0)
    // } else{
    //     setStrikes(strikes + 1)
    // }

    // //foul: 
    // if (foul) {
    //     if (setStrikes === 2) {
    //         setStrikes(strikes);
    //     } else {
    //         return setStrikes(strikes + 1)
    //     }
    // }

    // //hit: 
    // if (hit) {
    //     return
    //     setStrikes(0);
    //     setBalls(0);
    // } 

    

    return (
        <div>
            <button onClick = {() => props.addBall()}>Ball</button>
            <button onClick = {() => props.addStrike() }>Strike</button>
            <button onClick = {() => props.addFoul()}>Foul</button>
            <button onClick = {() => props.addHit()}>Hit</button>
        </div>
    )
}

export default Dashboard;