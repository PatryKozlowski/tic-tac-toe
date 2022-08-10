import Box from './Box'

class App {
    constructor() {
        this.container = null

        this.isDraw = false
        this.isGame = true

        this.board = ['', '', '', '', '', '', '', '', '']
        this.indexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        this.winsComibination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        this.player = 'X'
    }

    randomizingComputerPosition(array) {
        const computerPosition = array[Math.floor(Math.random() * array.length)]
        return computerPosition
    }

    removeIndexFromArray(arg) {
        if (this.indexArray.length === 1) return
        return (this.indexArray = this.indexArray.filter(
            (item) => item !== arg
        ))
    }

    computerMove() {
        if (this.indexArray.length === 1) {
            this.isDraw = true
            return
        }
        const position = this.randomizingComputerPosition(this.indexArray)
        const element = this.container.querySelector(`[data-id="${position}"]`)
        this.removeIndexFromArray(position)

        this.board[position] = 'O'
        element.innerText = 'O'
    }

    playerMove(e) {
        const divID = Number(e.target.dataset.id)

        this.removeIndexFromArray(divID)

        this.board[divID] = this.player
    }

    game(e) {
        if (this.board[e.target.dataset.id] !== '' || this.isGame !== true)
            return

        this.playerMove(e)
        this.computerMove()
        this.checkingWinner()
        this.render()
    }

    changePlayer() {
        this.player = this.player === 'X' ? 'O' : 'X'
        return this.player
    }

    checkingWinner() {
        // retrun winsCombination
        const winnerO = this.winsComibination.some((combination) => {
            // return winsCombination as index
            return combination.every((index) => {
                // checking includes
                return this.board[index].includes('O')
            })
        })

        const winnerX = this.winsComibination.some((combination) => {
            return combination.every((index) => {
                return this.board[index].includes('X')
            })
        })
        if (!winnerO && !winnerX && this.board !== '' && this.isDraw === true) {
            console.log('Draw')
            this.isGame = false
            return
        }

        if (winnerO) {
            console.log('Winn O')
            this.isGame = false
            return
        }

        if (winnerX) {
            console.log('Winn X')
            this.isGame = false
            return
        }
    }

    drawBoard() {
        this.board.map((element, index) => {
            const box = new Box(element, index, (e) => this.game(e))
            return this.container.appendChild(box.render())
        })
    }

    render() {
        if (!this.container) {
            this.container = document.createElement('div')

            this.container.style.display = 'grid'
            this.container.style.gap = '1px'
            this.container.style.gridTemplateColumns = 'repeat(3, 0fr)'
        }

        this.container.innerHTML = ''

        this.drawBoard()

        return this.container
    }
}

export default App
