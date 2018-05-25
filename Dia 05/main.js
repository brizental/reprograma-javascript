const knob = document.getElementById('knob');
const slider = document.getElementById('slider');
const audio = document.getElementById('audio');

audio.volume = 0;

let mouseDown = false;
let coordenadaXCLick = undefined;
let knobInitial = undefined;

knob.addEventListener('mousedown', function getCoordenateBefore(event) {
  mouseDown = true;
  coordenadaXCLick = event.clientX;
  knobInitial = knob.offsetLeft;
});

document.addEventListener('mousemove', function moveKnob(event) {
  if (mouseDown == true) {
    const difference = event.clientX - coordenadaXCLick;
    knob.style.left = knobInitial + difference + 'px'
  };
});

document.addEventListener('mouseup', function getCoordenateAfter(event) {
  mouseDown = false;
});
