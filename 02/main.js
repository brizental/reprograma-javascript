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
  "11h30": {
    "title": "Power Jump",
    "person": "Alvaro Bigaton"
  },
  "11h35": {
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

var now = (new Date()).getTime()
var smallestTimeDifference = Infinity
var redCircle = undefined

function createElementAndAddClass(element, classe) {
  var el = document.createElement(element)
  if (typeof classe !== "undefined") {
    el.classList.add(classe)
  }
  return el
}

for (var time in appointments) {
  var appointmentDiv = createElementAndAddClass("div", "appointment")

  var timeDiv = createElementAndAddClass("div", "time")
  var timeP = createElementAndAddClass("p")
  timeP.textContent = time
  timeDiv.appendChild(timeP)
  appointmentDiv.appendChild(timeDiv)

  var circleDiv = createElementAndAddClass("div", "circle")
  appointmentDiv.appendChild(circleDiv)

  var eventDiv = createElementAndAddClass("div", "event")
  var eventH2 = createElementAndAddClass("h2")
  eventH2.textContent = appointments[time]['title']
  var eventP = createElementAndAddClass("p")
  eventP.textContent = appointments[time]['person']
  eventDiv.appendChild(eventH2)
  eventDiv.appendChild(eventP)
  appointmentDiv.appendChild(eventDiv)  

  var scheduleDiv = document.getElementById("schedule")
  scheduleDiv.appendChild(appointmentDiv)

  var timeAppointment = new Date()
  timeAppointment.setHours(parseInt(time.split("h")[0]))
  timeAppointment.setMinutes(parseInt(time.split("h")[1]))
  timeAppointment = timeAppointment.getTime()
  var timeDifference = Math.abs(timeAppointment - now)  
  if (timeDifference < smallestTimeDifference) {
    smallestTimeDifference = timeDifference
    redCircle = circleDiv
  }
}

redCircle.style.backgroundColor = "red"