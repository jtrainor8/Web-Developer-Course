// export default function DoubleDice() {
//     const n1 = Math.floor(Math.random() *3) +1;
//     const n2 = Math.floor(Math.random() *3) +1;
//     const result = n1 === n2 ? "You Win!" : "You Lose :("
//     return (
//         <div>
//             <h2>{result}</h2>
//             <p>Num1: {n1}</p>
//             <p>Num2: {n2}</p>
//         </div>
//     );
// }


// export default function DoubleDice() {
//     const n1 = Math.floor(Math.random() *3) +1;
//     const n2 = Math.floor(Math.random() *3) +1;

//     return (
//         <div>
//             <h2>{n1 === n2 ? "You Win!" : "You Lose :("}</h2>
//             <p>Num1: {n1}</p>
//             <p>Num2: {n2}</p>
//         </div>
//     );
// }

// export default function DoubleDice() {
//     const n1 = Math.floor(Math.random() * 3) + 1;
//     const n2 = Math.floor(Math.random() * 3) + 1;

//     return (
//         <div>
//             <h2>Double Dice</h2>
//             {n1 === n2 ? <h3>You Win!</h3> : null}
//             <p>Num1: {n1}</p>
//             <p>Num2: {n2}</p>
//         </div>
//     );
// }

export default function DoubleDice() {
    const n1 = Math.floor(Math.random() * 3) + 1;
    const n2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = n1 === n2;
    const styles = {color: isWinner ? "green" : "red", fontSize: "30px"}

    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {isWinner && <h3> You Win!</h3>}
            <p>Num1: {n1}</p>
            <p>Num2: {n2}</p>
        </div>
    );
}