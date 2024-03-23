export default function Slots({val1, val2, val3}) {
    const isWinner = (val1 === val2) && (val1 === val3);
    const styles = { color: isWinner ? "green" : "red"} ;

    return(
        <div >
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={styles}>{isWinner ? "You win!" : "You lose :("}</h2>
            <h3>{isWinner ? "Congrats!" : null}</h3>
        </div>
    );

}