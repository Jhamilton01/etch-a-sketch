const divContainer = document.querySelector("#container")
const changeBtn = document.querySelector("#newGrid")
const clearBtn = document.querySelector("#clear")
let gridColumn = 16
let gridRow = 16

function main() {
    // Starting size 16x16
    createGrid(gridRow, gridColumn)
    changeGrid()
    clear()
}


function createGrid(gridRow, gridColumn){
    const containerWidth = 600;

    const squareWidth = containerWidth / gridColumn
    divContainer.style.width = `${containerWidth}px`

    for (let i = 0; i < (gridRow * gridColumn); i++){
        let square = document.createElement('div')
        square.style.width = `${squareWidth}px`
        square.style.height = `${squareWidth}px`
        /* flex basis was used to make it so only 16 items per row of 100% of the div container*/
        square.style.flexBasis = `calc(100% / ${gridColumn})`
        square.className = `square-${i+1}`
        divContainer.appendChild(square)
        hover(square)

    }

}

function hover(square){
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = getRandomColor()
    })

    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = getRandomColor()
    })
}

function getRandomColor(){
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i =0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color
}
function changeGrid(){
    changeBtn.addEventListener('click', () => {
        while (true) {
            gridRow = prompt("Enter the number of rows (max 100)");
            gridColumn = prompt("Enter the number of columns (max 100)");
    
            if (gridRow < 101 && gridColumn < 101) {
                break;
            } else {
                alert("Both column and row should be less than 100. Please try again.");
            }
        }
    
            divContainer.textContent = ''
            createGrid(gridRow, gridColumn)
        })
}

function clear(){
    //the .children is used to get the children of t given id
    const squares = divContainer.children
    clearBtn.addEventListener('click', () => {
        for (let square of squares){
            square.style.backgroundColor = 'lightgray'
        }
    })

}

main()