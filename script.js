console.log("begin")
const body = document.querySelector("body")

const player1Div = document.querySelector(".player1")

const player2Div = document.querySelector(".player2")

class Grid {
    constructor(gridSize) {
        this.grid = []
        for (let i=0; i<gridSize; i++) {
            this.grid[i] = []
            for(let y=0; y<gridSize; y++){
                this.grid[i][y] = "o"
            }
        }
    }
    getGrid() {
        return this.grid
    }
    printGrid(gridArray) {
        const playerDiv = document.createElement("div")
        for(let i=0; i<gridArray.length; i++) {
            const tr = document.createElement("tr")
            let row = gridArray[i] + " "
            for(let y=0; y<row.length; y++){
                const cell = row[y]
                const td = document.createElement("td")
                td.textContent = cell
                tr.appendChild(td)
            }
           playerDiv.appendChild(tr) 
        }
    return playerDiv
    }

}

const player1Grid = new Grid(8)
const player2Grid = new Grid(8)
console.log("hello", player1Grid)


const currentGridPlayer1 = player1Grid.getGrid()
console.log(currentGridPlayer1)
const renderPlayer1 = () => {
    player1Div.innerHTML = `<h3>Player 1: </h3>`
    player1Div.appendChild(player1Grid.printGrid(currentGridPlayer1))
}
console.log("48", player1Grid.printGrid(currentGridPlayer1))
renderPlayer1()

const currentGridPlayer2 = player2Grid.getGrid()
console.log(currentGridPlayer2)
const renderPlayer2 = () => {
    player2Div.innerHTML = `<h3>Player 2: </h3>`
    player2Div.appendChild(player2Grid.printGrid(currentGridPlayer2))
}
console.log("48", player2Grid.printGrid(currentGridPlayer2))
renderPlayer2()

const player1td = document.querySelectorAll(".player1 tr td")
console.log("63", player1td)