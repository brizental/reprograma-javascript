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

const questionsAll = document.getElementById("questions")
const closeButton = document.getElementById("close")
const startButton = document.querySelector("#container button")
const overlay = document.getElementById("overlay")
const timer = document.getElementById("timer")
let interval = undefined
startButton.addEventListener("click", () => {
  console.log("clicouuu")
  overlay.style.top = "0vh"
  interval = startTimer(timer)
})
closeButton.addEventListener("click", closeQuiz)

function closeQuiz() {
  setTimeout(function () {
    questionsAll.style.left = "0vw"
  }, 500)
  overlay.style.top = "100vh"
  clearInterval(interval)
}

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

for (let i = 0; i < questions.length; i++) {
  const questionDiv = document.createElement("div")
  questionDiv.classList.add("question")
  questionDiv.style.left = 100 * i + "vw"

  const questionP = document.createElement("p")
  questionP.textContent = questions[i].text

  const answersDiv = document.createElement("div")
  answersDiv.classList.add("answers")

  const trueButton = document.createElement("button")
  trueButton.textContent = "VERDADEIRO"
  const falseButton = document.createElement("button")
  falseButton.textContent = "FALSO"

  questionDiv.appendChild(questionP)

  answersDiv.appendChild(trueButton)
  answersDiv.appendChild(falseButton)

  questionDiv.appendChild(answersDiv)

  questionsAll.appendChild(questionDiv)

  trueButton.addEventListener("click", function() {
    questions[i].userAnswer = true
    if (i < questions.length - 1) {
      questionsAll.style.left = `calc(${questionsAll.offsetLeft}px - 100vw)`
    } else {
      closeQuiz()
    }
  })

  falseButton.addEventListener("click", function() {
    questions[i].userAnswer = false
    if (i < questions.length - 1) {
      questionsAll.style.left = `calc(${questionsAll.offsetLeft}px - 100vw)`
    } else {
      closeQuiz()
    }
  })
}