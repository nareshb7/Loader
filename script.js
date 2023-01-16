const content = document.getElementById('content')
const loader = document.getElementById('loader')


content.style.display = 'none'
loader.style.display = 'flex'

setTimeout(()=>{
content.style.display = 'block'
loader.style.display = 'none'
}, 8000)

content.innerHTML += `Hii this is text from script`