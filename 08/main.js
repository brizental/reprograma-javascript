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

const closeButton = document.getElementById("close")
const startButton = document.querySelector("#container button")
const overlay = document.getElementById("overlay")
const timer = document.getElementById("timer")
let interval = undefined
startButton.addEventListener("click", () => {
  overlay.style.top = "0vh"
  interval = startTimer(timer)
})
closeButton.addEventListener("click", () => {
  overlay.style.top = "100vh"
  clearInterval(setInterval)
})

function startTimer(element) {
  element.innerHTML = "00:00"
  const now = Date.now()
  return setInterval(() => {
    const updatedNow = Date.now()
    const diffDate = new Date(updatedNow - now)
    const minutes = diffDate.getMinutes() < 10 
      ? "0" + diffDate.getMinutes() : diffDate.getMinutes()
    const seconds = diffDate.getSeconds() < 10 
      ? "0" + diffDate.getSeconds() : diffDate.getSeconds()
    element.innerHTML = minutes + ":" + seconds
  }, 1000)
}