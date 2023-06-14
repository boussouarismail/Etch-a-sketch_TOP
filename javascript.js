//const container1 = document.querySelector('#container');
//const div = document.createElement('div');
//div.textContent = "555";

/*
for (let i = 0; i<16*16 ; i++){
    grid[i] = document.createElement('div');
    grid[i].textContent = "0";
}*/

let penColor = "black"
let gridDimentions = 960;

let grid = [];

const container = document.querySelector('#container');
const resetGrid = document.querySelector('#resetGrid');

resetGrid.onclick = () => setGrid(prompt('HOW MENY SQUARES PER SIDE ...PS NO MORE THEN 100 pls'));

function eraseGrid (){
    for (let i = 0 ; i<grid.length ; i++){
        grid[i].remove();
    }
    grid = [];
}

function setGrid (squaresPerSide){
    const pixel = gridDimentions/squaresPerSide;
    eraseGrid();
    for (let i = 0 ; i<Math.pow(squaresPerSide,2) ; i++){
        grid[i] = document.createElement('div');
        grid[i].classList.add(`content`);
        grid[i].style.cssText = `width: ${pixel}px; height: ${pixel}px;`
        grid[i].addEventListener('mouseover', () => {
            grid[i].style.backgroundColor = penColor;
        });
        container.appendChild(grid[i]);
}
}

function setPenColor (penColor){
    for (let i = 0 ; i<grid.length ; i++){
        grid[i].addEventListener('mouseover', () => {
            grid[i].style.backgroundColor = penColor;
        });
    }
}

/*
grid = document.querySelector('#container');
console.log(grid);
grid.addEventListener('mouseover', () => {
    grid.style.cssText = "background-color: white;";
});
*/