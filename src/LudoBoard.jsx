import { use, useState } from 'react';

export default function LudoBoard() {
    // let [blueMoves, setBlueMoves] = useState(0);
    // let [yellowMoves, setYellowMoves] = useState(0);
    // let [greenMoves, setGreenMoves] = useState(0);
    // let [redMoves, setRedMoves] = useState(0);

    let [moves, setmoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});
    // let [count, setcount] = useState(0);
    let [arr, setarr] = useState(["no moves"]);

    let updateBlue = () => {
        // moves.blue += 1; // This will not work as it does not trigger a re-render
        // setmoves({...moves, blue: moves.blue + 1}); // This works but is not the best practice
        console.log(`moves.blue = ${moves.blue}`);
        setmoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue + 1};
        });
        // arr.push("blue moves");
        setarr([...arr, " blue moves "]);
        console.log(arr);
    }

    let updateYellow = () => {
        console.log(`moves.yellow = ${moves.yellow}`);
        setmoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow + 1};
        });
        setarr((prevarr) => {
            return [...prevarr, " yellow moves "];
        });
        console.log(arr);
    }

    let updategreen = () => {
        console.log(`moves.green = ${moves.green}`);
        setmoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green + 1};
        });
        // setarr([...arr, " green moves "]);
        setarr((prevarr) => {
            return [...prevarr, " green moves "];
        })
        console.log(arr);
    }

    let updatered = () => {
        console.log(`moves.red = ${moves.red}`);
        setmoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1};
        });
        setarr((prevarr) => {
            return [...prevarr, " red moves "];
        })
        console.log(arr);
    }

    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>    
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color:"black"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updategreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updatered}>+1</button>
            </div>
        </div>
    )
}