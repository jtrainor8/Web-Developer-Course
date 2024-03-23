import Property from "./Property";
import "./PropertyList.css"

function PropertyList({properties}) {
    return(
        <div className="PropertyList">
            {properties.map((p) => (
                <Property 
                    key={p.id}
                    name={p.name}
                    rating={p.rating}
                    price={p.price}
                />
            ))}
        </div>
    )
}

export default PropertyList;