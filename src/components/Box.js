class Box {
    constructor(className, element, index, onClick) {
        this.className = className
        this.element = element
        this.index = index
        this.onClick = onClick
    }

    render() {
        const divBox = document.createElement('div')

        divBox.classList.add(this.className)

        divBox.setAttribute('data-id', this.index)

        divBox.addEventListener('click', this.onClick)

        divBox.innerText = this.element

        return divBox
    }
}

export default Box
