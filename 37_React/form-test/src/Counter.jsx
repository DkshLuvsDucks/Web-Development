import { useState, useEffect } from "react";

export default function Counter(){
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);
    
    const incCountx = () => {
        setCountx((currCount) => currCount+1);
    }
    
    const incCounty = () => {
        setCounty((currCount) => currCount+1);
    }

    useEffect(function sideEffect() {
        console.log("This is a side effect...");
    }, [countx]) // pass dependency as a second argument in array form
    // if u want to only trigger it during render and not during re-render
    // then pass an empty array

    return(
        <div>
            <h1>Count x = {countx}</h1>
            <button onClick={incCountx}>+1</button>
            <h1>Count y = {county}</h1>
            <button onClick={incCounty}>+1</button>
        </div>
    );
}