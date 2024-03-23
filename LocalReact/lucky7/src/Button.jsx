import "./Button.css"

export default function Button({clickFunc, label="Click Me"}) {
    return <button className="Button" onClick={clickFunc}>{label}</button>
}