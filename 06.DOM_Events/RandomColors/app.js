const h1 = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    h1.innerText = `rgb(${r}, ${g}, ${b})`;
})


//ALSO COULD MAKE IT TAKE IT'S OWN FUNCTION: FOR THE LOOK LOL 
// function makeColor() {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`
// }