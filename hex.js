const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let btn = document.getElementById("btn")
let showColor = document.getElementById("showColor")

btn.addEventListener('click', function() {
    hexVal = "#"
    for(let i=0; i<6; i++) {
        let colorVal = randomColor()
        hexVal += hex[colorVal]
    }
    showColor.innerText = hexVal
    document.body.style.background = hexVal
} )

function randomColor(){
    return Math.floor(Math.random() * hex.length)
}
