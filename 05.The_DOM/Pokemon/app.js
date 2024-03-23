// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

for (let i = 1; i <= 151; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('pokemon');
    const newImg = document.createElement('img');
    const newSpan = document.createElement('span');

    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    newSpan.innerHTML = `#${i}`;

    container.appendChild(newDiv);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newSpan);
}

