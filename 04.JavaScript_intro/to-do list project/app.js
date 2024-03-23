const gameOver = false;
const list = [];
while (!gameOver) {
    let choice = prompt("What would you like to do?");
    if (choice.toLowerCase() === 'new') {
        let newTask = prompt("Enter a new todo.");
        list.push(newTask);
        console.log(`${newTask} has been added to the list.`)
    }
    else if (choice.toLowerCase() === 'list') {
        console.log('**********')
        for (let each in list) {
            console.log(`${each}: ${list[each]}`)
        }
        console.log('**********')
    }
    else if (choice.toLowerCase() === 'delete') {
        let toDelete = parseInt(prompt("Enter index of todo to delete."));
        if (!Number.isNaN(toDelete)) {
            list.splice(toDelete, 1);
            console.log('Todo removed.');
        } else {
            console.log('Unknown Index.');
        }
    }
    else if (choice.toLowerCase() === 'quit') break;

    else {
        console.log("I don't understand that command.")
    }
}
console.log('Ok, you quit the app.')