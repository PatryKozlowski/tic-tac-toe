class Button {
    constructor(label, onClick) {
        this.label = label
        this.onClick = onClick
    }

    render() {
        const button = document.createElement('button')

        //style button
        button.style.height = '46px'
        button.style.padding = '10px'
        button.style.fontSize = '1rem'
        button.style.backgroundColor = '#2a9d8f'
        button.style.border = '1px solid rgba(0, 0, 0, 0.5)'
        button.style.borderRadius = '6px'
        button.style.outline = 'none'
        button.style.cursor = 'pointer'

        button.innerHTML = this.label

        button.addEventListener('click', this.onClick)

        return button
    }
}

export default Button
