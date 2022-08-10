import App from './App'

const app = new App()

document.body.style.height = '100vh'

const root = document.querySelector('#root')

root.style.display = 'flex'
root.style.alignItems = 'center'
root.style.justifyContent = 'center'
root.style.height = '100%'

root.appendChild(app.render())
