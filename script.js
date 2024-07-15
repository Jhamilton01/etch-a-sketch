const divContainer = document.querySelector("#container")

function main() {
    createGrid()
}


//creates a 16x16 grid made out of divs
function createGrid(){
    for (let i = 0; i < 256; i++){
        const square = document.createElement('div')
        square.className = `square-${i+1}`
        divContainer.appendChild(square)
        hover(square)

    }

}

function hover(square){
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'yellow'
    })

    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = 'yellow'
    })
}

main()