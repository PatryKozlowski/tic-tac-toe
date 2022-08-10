import Button from './Button'
class Modal {
    constructor(className, onClick, gameStatus) {
        this.className = className
        this.onClick = onClick
        this.gameStatus = gameStatus
    }

    render() {
        const modalDiv = document.createElement('div')

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
            modalDiv.appendChild(buttonElementResetGame.render())
        }

        return modalDiv
    }
}

export default Modal
