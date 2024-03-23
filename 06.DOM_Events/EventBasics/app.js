const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("wtf pervert");
    console.log("ok.. maybe it's fine :3");
}

function scream() {
    console.log("AAAAAHHHHHHHHHHH");
    console.log("dont touch me there.")
}

btn.onmouseenter = scream;

const btn2 = document.querySelector('#v3');

btn2.addEventListener('dblclick', () => {
    alert("Clicked!")
})

function twist() {
    console.log("twist")
}
function shout() {
    console.log("shout")
}

const tas = document.querySelector('#tas');

// tas.onclick = twist;
// tas.onclick = shout;

tas.addEventListener('click', twist)
tas.addEventListener('click', shout)




