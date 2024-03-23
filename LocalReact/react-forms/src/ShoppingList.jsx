import ShoppingListForm from "./ShoppingListForm";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
import { useState } from "react";
import { v4 as uuid }  from "uuid";

function ShoppingList (){
    const [items, setItems] = useState([
        {id: uuid(), product: "Bananas", quantity: 8},
        {id: uuid(), product: "Strawberries", quantity: 24},
    ]);

    const addItem = (item) => {
        setItems(currItems => {
            return [...currItems, {...item, id: uuid()}] 
        })
    }

    return(
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i => <li key={i.id}>{i.product} - {i.quantity}</li>)}
            </ul>
            <ValidatedShoppingListForm addItem={addItem}/>    
        </div>
    )
}

export default ShoppingList;