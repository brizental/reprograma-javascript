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

for (var time in appointments) {
  var appointmentDiv = document.createElement("div")
  appointmentDiv.classList.add("appointment")

  // !CUIDADO!
  // appointmentDiv.innerHTML = `<div class="time">
  //                               <p>${time}</p>
  //                             </div>
  //                             <div class="circle"></div>
  //                             <div class="event">
  //                               <h2>${appointments[time]['title']}</h2>
  //                               <p>${appointments[time]['person']}</p>
  //                             </div>`
  // !CUIDADO!


  var timeDiv = document.createElement("div")
  timeDiv.classList.add("time")
  var timeP = document.createElement("p")
  timeP.textContent = time
  timeDiv.appendChild(timeP)
  appointmentDiv.appendChild(timeDiv)

  var circleDiv = document.createElement("div")
  circleDiv.classList.add("circle")
  appointmentDiv.appendChild(circleDiv)

  var eventDiv = document.createElement("div")
  eventDiv.classList.add("event")
  var eventH2 = document.createElement("h2")
  eventH2.textContent = appointments[time]['title']
  var eventP = document.createElement("p")
  eventP.textContent = appointments[time]['person']
  eventDiv.appendChild(eventH2)
  eventDiv.appendChild(eventP)
  appointmentDiv.appendChild(eventDiv)  

  var scheduleDiv = document.getElementById("schedule")
  scheduleDiv.appendChild(appointmentDiv)
}