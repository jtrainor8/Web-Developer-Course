function handleClick(){
    console.log('Clicked the button!!!')
}

function hoverHandle(){
    console.log('hovereddd!')
}

export default function Clicker() {
    return(
        <div>
            <p onMouseOver={hoverHandle}>Hover Over Me</p>
            <button onClick={handleClick} >Click</button>
        </div>
    );
}