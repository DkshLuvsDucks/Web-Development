import { useState } from "react"

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, red: 0, green: 0, yellow: 0});
    let [arr, setArr] = useState(["no moves"]);
    
    let updateBlue = () => {
        console.log(`moves.blue : ${moves.blue}`);
        setMoves({...moves, blue: moves.blue + 1}); // spread the obj (detected as new obj w diff address triggering re-render)
        // setArr([...arr, "blue moves"]);
        setArr((prevArr) => {
            return [...prevArr, "blue moves"];
        });
        console.log(arr);
    }

    let updateGreen = () => {
        console.log(`moves.green : ${moves.green}`);
        setMoves({...moves, green: moves.green + 1}); 
        setArr([...arr, "green moves"]);
    }

    let updateYellow = () => {
        console.log(`moves.yellow : ${moves.yellow}`);
        setMoves({...moves, yellow: moves.yellow + 1}); 
        setArr([...arr, "yellow moves"]);
    }
    
    let updateRed = () => {
        console.log(`moves.red : ${moves.red}`);
        setMoves({...moves, red: moves.red + 1}); 
        setArr([...arr, "red moves"]);
    }
    return(
        <>  
            <p>Game Begins!</p>
            <div className="board">
                {arr}
                <p>Blue moves = {moves.blue} </p>
                <button onClick={updateBlue} style={{backgroundColor: "blue"}}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor: "green"}}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor: "yellow", color: "black"}}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button onClick={updateRed} style={{backgroundColor: "red"}}>+1</button>
                
            </div>
        </>
    )
};