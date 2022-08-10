class Message {
  constructor(text, colorMessage = 'red') {
    this.text = text
    this.colorMessage = colorMessage
  }

  render() {
    const p = document.createElement('p')

    p.style.fontFamily = 'sans-serif'
    p.style.width = '100%'
    p.style.backgroundColor = this.colorMessage
    p.style.borderRadius = '6px'
    p.style.textAlign = 'center'
    p.style.padding = '5px'

    p.innerText = this.text

    return p
  }
}

export default Message
