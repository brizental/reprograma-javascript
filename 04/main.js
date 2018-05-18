const knob = document.getElementById("knob")
const slider = document.getElementById("slider")
const audio = document.getElementById("audio")
audio.volume = 0

let mouseClicked = false
let mouseClickedPosition = undefined
let knobInitialLeft = undefined

const sliderLeft = slider.getBoundingClientRect().left
const sliderRight = slider.getBoundingClientRect().right

console.log(sliderLeft, sliderRight)

knob.addEventListener("mousedown", event => {
  mouseClicked = true
  mouseClickedPosition = event.clientX
  knobInitialLeft = knob.offsetLeft
  console.log(knobInitialLeft)
})

document.addEventListener("mousemove", event => {
  if (mouseClicked
      && event.clientX > sliderLeft
      && event.clientX < sliderRight) {
    const diffX = event.clientX - mouseClickedPosition
    knob.style.left = knobInitialLeft + diffX + "px"
    // Volume
    const volume = (event.clientX - sliderLeft) / (sliderRight - sliderLeft)

    audio.volume = volume
  }
})

document.addEventListener("mouseup", event => {
  mouseClicked = false
})