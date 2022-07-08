let count = 0

const value = document.getElementById("value")
const btns = document.querySelectorAll("button")

btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let styles = e.currentTarget.classList
        if (styles.contains('decrease')){
            count--
            value.style.color = "red"
        } else if (styles.contains('increase')){
            count++
            value.style.color = "green"

        } else {
            count = 0
            value.style.color = "black"

        }
        value.innerHTML = count
    })
});

