class Radio {
    constructor(options, onSelect) {
        this.options = options
        this.onSelect = onSelect
    }

    render() {
        const inputRadioContainer = document.createElement('div')
        inputRadioContainer.classList.add('container__radio')
        this.options.forEach(({ label, value, id, name }) => {
            const inputRadioLabel = document.createElement('label')
            const inputRadio = document.createElement('input')

            inputRadioLabel.innerText = label
            inputRadioLabel.htmlFor = id

            inputRadio.type = 'radio'
            inputRadio.value = value
            inputRadio.id = id
            inputRadio.name = name

            inputRadio.addEventListener('input', (e) =>
                this.onSelect(e.target.value)
            )

            inputRadioContainer.appendChild(inputRadio)
            inputRadioContainer.appendChild(inputRadioLabel)
        })

        return inputRadioContainer
    }
}

export default Radio
