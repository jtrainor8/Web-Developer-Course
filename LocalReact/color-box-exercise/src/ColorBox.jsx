import { useState } from "react"
import "./ColorBox.css"

function randColor(arr) {
    const idx = Math.floor(Math.random()*arr.length);
    return arr[idx];
}

function ColorBox({colors}) {

    const [color, setColor] = useState(randColor(colors));

    const toggleColor = () => { 
        const randomPick = randColor(colors); 
        setColor(randomPick);
    };

    return(
        <div className="ColorBox" onClick={toggleColor} style={{backgroundColor: color}}> </div>
    );
}


export default ColorBox;