import Button from './Button'
import Message from './Message'
class Modal {
    constructor(className, onClick, gameStatus, message) {
        this.className = className
        this.onClick = onClick
        this.gameStatus = gameStatus
        this.message = message
    }

    render() {
        const modalDiv = document.createElement('div')
        const modalDivContainer = document.createElement('div')

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
                this.onClick
            )
            modalDiv.appendChild(buttonElementStartGame.render())
        } else {
            const buttonElementResetGame = new Button(
                'btn',
                'Reset game',
                this.onClick
            )

            const messageElement = new Message(this.message)

            modalDivContainer.appendChild(messageElement.render())
            modalDivContainer.appendChild(buttonElementResetGame.render())

            modalDiv.appendChild(modalDivContainer)
        }

        return modalDiv
    }
}

export default Modal
