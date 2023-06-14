//const container1 = document.querySelector('#container');
//const div = document.createElement('div');
//div.textContent = "555";

/*
for (let i = 0; i<16*16 ; i++){
    grid[i] = document.createElement('div');
    grid[i].textContent = "0";
}*/

let r,g,b =0;
let penColor = "black"
let gridDimentions = 960;
let darkness = 229.5;

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
        grid[i].style.backgroundColor = `rgb(255, 255, 255)`;
        grid[i].addEventListener('mouseover', () => {
            //getDarker(grid[i].style.backgroundColor);
            rainbowPen ()
            grid[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
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

function rainbowPen (){
    r = (Math.random()*255);
    g = (Math.random()*255);
    b = (Math.random()*255);
}

function getDarker (color){
    setRGB(color);
    r = r -25.5;
    g = g -25.5;
    b = b -25.5;

}

function setRGB (color){
    const re = /\d+/g;
    let myArray = color.match(re); 
    r = +myArray[0];
    g = +myArray[1];
    b = +myArray[2];
}


/*
grid = document.querySelector('#container');
console.log(grid);
grid.addEventListener('mouseover', () => {
    grid.style.cssText = "background-color: white;";
});
*/