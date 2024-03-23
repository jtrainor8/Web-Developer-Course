import ColorBox from "./ColorBox";
import "./ColorGrid.css"

export default function ColorGrid({colors}) {

    const boxes = []
    for( let i=0; i<25; i++) {
        boxes.push(<ColorBox key={i} colors={colors} />)
    }

   return (
        <div className="ColorGrid">
            {boxes}
        </div>
   )
}