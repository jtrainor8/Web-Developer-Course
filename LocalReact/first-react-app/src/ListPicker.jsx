export default function ListPicker({values}) {
    const randIdx = Math.floor(Math.random()*values.length);
    const randEle = values[randIdx];
    return (
        <div>
            <p>The List of values: {values} </p>
            <p>Random Element is: {randEle} </p>
        </div>
    );
}