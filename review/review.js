const reviews = [
    {
        id: 1,
        name: "Uchenna Anya",
        job: "Web developer",
        img: "profilepic.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur natus sint obcaecati laboriosam. Ut quibusdam aliquam odit voluptas doloribus asperiores cumque maiores repellat amet dicta adipisci fugiat eos, hic debitis."
    },
    {
        id: 2,
        name: "Olu Bosco",
        job: "Engineer",
        img: "passport1.webp",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur natus sint obcaecati laboriosam. Ut quibusdam aliquam odit voluptas doloribus asperiores cumque maiores repellat amet dicta adipisci fugiat eos, hic debitis."
    },
    {
        id: 3,
        name: "Linda John",
        job: "Marketer",
        img: "passport4.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur natus sint obcaecati laboriosam. Ut quibusdam aliquam odit voluptas doloribus asperiores cumque maiores repellat amet dicta adipisci fugiat eos, hic debitis."
    },
    {
        id: 4,
        name: "Susan Mike",
        job: "Speaker",
        img: "passport2.jpeg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur natus sint obcaecati laboriosam. Ut quibusdam aliquam odit voluptas doloribus asperiores cumque maiores repellat amet dicta adipisci fugiat eos, hic debitis."
    },

]

let imgs = document.getElementById("personImg")
let author = document.getElementById("author")
let job = document.getElementById("job")
let info = document.getElementById("info")

let prevBtn = document.querySelector("#prevBtn")
let nextBtn = document.querySelector("#nextBtn")
let randomBtn = document.querySelector(".randomBtn")

let currentItem = 0

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem)
})

nextBtn.addEventListener('click', function(){
    console.log("next")
    currentItem++
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem)
})

prevBtn.addEventListener('click', function(){
    console.log("next")
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})


function showPerson (person) {
    const item = reviews[person]
    imgs.src = item.img
    author.innerText = item.name
    job.innerText = item.job
    info.innerText = item.text
}

randomBtn.addEventListener('click', function(){
    console.log("Random")
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem)
})