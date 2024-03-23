function ShoppingListItem({id, item, quantity, completed}) {
    const styles = { 
        color: completed ? "grey" : "red", 
        textDecoration: completed ? "line-through" : "none" 
    }

    return (
        <li key={id} style={styles}> {item} - {quantity} </li> 
    )
}

export default ShoppingListItem;