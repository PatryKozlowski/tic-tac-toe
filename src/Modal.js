class Modal {
    render() {
        const modalDiv = document.createElement('div')

        modalDiv.style.width = '50px'
        modalDiv.style.height = '50px'
        modalDiv.style.display = 'flex'
        modalDiv.style.alignItems = 'center'
        modalDiv.style.justifyContent = 'center'
        modalDiv.style.backgroundColor = 'red'

        return modalDiv
    }
}

export default Modal
