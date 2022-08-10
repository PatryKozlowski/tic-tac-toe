class Box {
    constructor(element, index, onClick) {
        this.element = element
        this.index = index
        this.onClick = onClick
    }

    render() {
        const divBox = document.createElement('div')

        divBox.style.width = '50px'
        divBox.style.height = '50px'
        divBox.style.display = 'flex'
        divBox.style.alignItems = 'center'
        divBox.style.justifyContent = 'center'
        divBox.style.backgroundColor = 'red'

        divBox.setAttribute('data-id', this.index)

        divBox.addEventListener('click', this.onClick)

        divBox.innerText = this.element

        return divBox
    }
}

export default Box
