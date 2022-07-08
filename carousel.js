const color = ['red', 'blue', 'green', 'cyan']
const imgs = ['niiflicks.png', 'profesco.png', 'contacts.png', 'contactform.png']

let showColorName = document.getElementById('showColorName')
let imgTitle = document.getElementById("imgTitle")
let stopbtn = document.getElementById("stopbtn")
let flipColorBtn = document.getElementById("flipColorBtn")
let startbtn = document.getElementById("startbtn")

function randomColor() {
    return Math.floor(Math.random() * color.length)
}

flipColorBtn.addEventListener('click', function() {
    const randomNumber = randomColor()
    document.body.style.backgroundColor =  color[randomColor()]
    showColorName.innerText = color[randomNumber]
})

startbtn.addEventListener('click', () => { setin = setInterval(function() {
    const randomNumber = randomColor()
    document.body.style.backgroundColor = color[randomColor()]
    showColorName.innerHTML = color[randomNumber]
}, 1000)} )

let currentItem = 0

function imgSlider() {
    currentItem++
    // if (currentItem > imgs.length - 1)
    // currentItem = 0
}


let setin = setInterval(function() {
    const randomNumber = randomColor()
    document.body.style.backgroundColor = color[randomNumber]

    let img = document.getElementById('img')
    img.src = imgs[imgSlider()]

    showColorName.innerText = color[randomNumber]
}, 1000)

const stop = () => clearInterval(setin)

stopbtn.addEventListener('click', stop)
