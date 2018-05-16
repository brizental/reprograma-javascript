var appointments = {
  "06h30": {
    "title": "HIIT",
    "person": "Michael Goulart"
  },
  "07h00": {
    "title": "Zumba",
    "person": "Mariana Silva"
  },
  "07h30": {
    "title": "Power Jump",
    "person": "Alvaro Bigaton"
  },
  "08h00": {
    "title": "Fit Dance",
    "person": "Victor Bonifácio"
  },
  "08h30": {
    "title": "Gap",
    "person": "Michael Goulart"
  },
  "18h00": {
    "title": "Power Jump",
    "person": "Alvaro Bigaton"
  },
  "18h30": {
    "title": "Zumba",
    "person": "Mariana Silva"
  },
  "19h00": {
    "title": "HIIT",
    "person": "Victor Bonifácio"
  },
  "19h00": {
    "title": "Jiu-Jitsu",
    "person": "Beto Almeida"
  },
  "19h30": {
    "title": "Abdominal",
    "person": "Michael Goulart"
  },
  "20h00": {
    "title": "Fit Dance",
    "person": "Evandro Almeida"
  },
  "20h30": {
    "title": "Glúteos",
    "person": "Mariana Silva"
  }
}

var now = (new Date()).getTime();
var smallestTimeDifference = Infinity;
var redCircle = undefined;

for (var time in appointments) {
  var schedule = document.getElementById('schedule');
  var container = document.createElement('div');
  container.classList.add('appointment');
  schedule.appendChild(container);

  var divTime = document.createElement('div');
  divTime.classList.add('time');
  container.appendChild(divTime);

  var pHora = document.createElement('p');
  pHora.textContent = time;
  divTime.appendChild(pHora);

  var circle = document.createElement('div');
  circle.classList.add('circle');
  container.appendChild(circle);

  var event = document.createElement('div');
  event.classList.add('event');
  container.appendChild(event);

  var h2 = document.createElement('h2');
  h2.textContent = appointments[time].title;
  event.appendChild(h2);

  var pNome = document.createElement('p');
  pNome.textContent = appointments[time].person;
  event.appendChild(pNome);

  var timeAppointment = new Date();
  timeAppointment.setHours(parseInt(time.split('h')[0]));
  timeAppointment.setMinutes(parseInt(time.split('h')[1]));
  timeAppointment = timeAppointment.getTime();
  var timeDifference = Math.abs(timeAppointment - now);

  if (timeDifference < smallestTimeDifference) {
    smallestTimeDifference = timeDifference;
    redCircle = circle;
  }
}

redCircle.style.backgroundColor = 'red';