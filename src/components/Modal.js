import Button from './Button'
import Message from './Message'
import Radio from './Radio'

class Modal {
    constructor(className, fn, gameStatus, message) {
        this.className = className
        this.fn = fn
        this.gameStatus = gameStatus
        this.message = message
    }

    render() {
        const modalDiv = document.createElement('div')
        const modalDivContainer = document.createElement('div')
        const radioElement = new Radio(
            [
                {
                    label: 'Play as X',
                    value: 'X',
                    id: 'x',
                    name: 'select_sign',
                },
                {
                    label: 'Play as O',
                    value: 'O',
                    id: 'o',
                    name: 'select_sign',
                },
            ],
            this.fn.selectSign
        )

        modalDivContainer.style.width = '50%'
        modalDivContainer.style.height = '25%'
        modalDivContainer.style.display = 'flex'
        modalDivContainer.style.flexDirection = 'column'
        modalDivContainer.style.alignItems = 'stretch'
        modalDivContainer.style.justifyContent = 'space-between'

        modalDiv.classList.add(this.className)

        if (this.gameStatus) {
            const buttonElementStartGame = new Button(
                'btn',
                'Start game',
                this.fn.startGame
            )
            //modalDiv.appendChild(buttonElementStartGame.render())
            modalDivContainer.appendChild(buttonElementStartGame.render())
            modalDivContainer.appendChild(radioElement.render())
        } else {
            const buttonElementResetGame = new Button(
                'btn',
                'Reset game',
                this.fn.resetGame
            )

            const messageElement = new Message(this.message)

            modalDivContainer.appendChild(messageElement.render())
            modalDivContainer.appendChild(buttonElementResetGame.render())
        }
        modalDiv.appendChild(modalDivContainer)

        return modalDiv
    }
}

export default Modal
