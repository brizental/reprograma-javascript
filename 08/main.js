/* Objeto com as perguntas */
let questions = [
  {
    text: "Lorem ipsum dolor sit amet?",
    answer: true
  },
  {
    text: "Consectetur adipiscing elit?",
    answer: false
  },
  {
    text: "Pellentesque sit amet mi egestas?",
    answer: true  
  }
]

const startButton = document.querySelector("#container button")
const overlay = document.getElementById("overlay")
startButton.addEventListener("click", () => {
  overlay.style.top = "0vh"
})
const closeButton = document.getElementById("close")
closeButton.addEventListener("click", () => {
  overlay.style.top = "100vh"
})