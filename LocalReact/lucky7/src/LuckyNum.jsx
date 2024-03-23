import { useState } from "react";
import Dice from "./Dice";
import { getRolls } from "./utils";
import Button from "./Button";
 

export default function LuckyNum ({title = "Dice Game", numDice=2, winCheck, color}) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));
    
    return(
        <main className="LuckyNum">
            <h1>{title} {isWinner && " - You Win!"}</h1>
            <Dice dice={dice} color={color} />
            {/* <button onClick={roll}>Re-Roll Dice</button> */}
            <Button clickFunc={roll} label="Re-Roll" />
        </main>
    )
}