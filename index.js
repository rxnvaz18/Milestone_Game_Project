// Declaring variables for the components of the connect four game

var mode

let firstplayer = "R"
let secondplayer = "Y"

let currentP = firstplayer

let gameOver = false
let currentC
let board
const rows = 6
const columns = 7


// setting the board as soon as page loads
  window.onload = function() {
    setGame()
}

function setGame() {
    board =[]
    currentC = [5, 5, 5, 5, 5, 5, 5]

    for (let r = 0; r < rows; r++) {
        let row = []
        for (let c = 0; c < columns; c++) {
            row.push('')
        // HTML
            let tile = document.createElement('div')
            tile.id = r.toString() + "-" + c.toString()
            tile.classList.add('tile')
            tile.addEventListener('click', gameplay)// Event Listener
            document.getElementById('board').append(tile)
        }
        board.push(row)
    }
}
// setting the player piece down function with alternation
function gameplay() {
    if (gameOver) {
        return
    }
    let coords = this.id.split('-')
    let r = parseInt(coords[0])
    let c = parseInt(coords[1])

    r = currentC [c]
    if(r < 0) {
        return
    }
    board[r][c] = currentP
    let tile = document.getElementById(r.toString() + '-' + c.toString())
    if (currentP == firstplayer) {
        tile.classList.add('player1')
        currentP = secondplayer
    }
    else {
        tile.classList.add('player2')
        currentP = firstplayer
    }
    
    r -= 1 // updating row height for the column
    currentC[c] = r  // updating the array

    checkWinner()
}

function checkWinner() {
// horizontal checks
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != '') {
                if(board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                    setWinner(r, c)
                    return
                }
            }
        }
    }
// vertical checks
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] != '') {
                if(board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]) {
                 setWinner(r, c)
            return   
                }
                
            }
        }
    }
// anti-diagonal checks
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if(board[r][c] != '') {
                if(board[r][c] == board[r + 1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                 setWinner(r, c)
                    return   
                }
                    
            }
        }
    }
// diagonal checks
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != '') {
                if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                    setWinner(r, c)
                    return
                }
            }
        }

    }
}

// win condition function
function setWinner(r, c) {
    let winner = document.getElementById('winner')
    if (board[r][c] == firstplayer) {
        winner.innerText = 'Player 1 Wins!'
    } 
    else {
        winner.innerText = 'Player 2 Wins!'
    }

gameOver = true

}

// reset.onclick = function resetGame() {
//     setGame()
//     gameplay()
//     checkWinner()
//     setWinner()
// }