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

// Cria uma variavel com o horario de agora e transforma em unix time
// https://pt.wikipedia.org/wiki/Unix_time
var now = (new Date()).getTime()
// Cria uma variavel auxiliar, com o maior valor numérico possivel
// no javascript. Isso e para podermos encontrar a menor differenca de
// tempo entre todos os horarios no objeto "appointements"
var smallestTimeDifference = Infinity
// Cria uma variavel auxiliar para guardar o elemento da div.circle
// que precisara sre pintada de vermelho apos todas as iteracoes do
// nosso loop.
var redCircle = undefined

function createElementAndAddClass(element, classe) {
  // Cria novo elemento de HTML, esse elemento sera passado como argumento
  var el = document.createElement(element)
  // Caso o argumento "classe" tenha sido passado...
  if (typeof classe !== "undefined") {
    // Adiciona uma classe ao elemento criado
    el.classList.add(classe)
  }
  // Retorna o elemento criado
  return el
}

for (var time in appointments) {
  // Cria o elemento de HTML div.appointment
  var appointmentDiv = createElementAndAddClass("div", "appointment")

  // Cria o elemento de HTML div.time
  var timeDiv = createElementAndAddClass("div", "time")
  // Cria o elemento de HTML p
  var timeP = createElementAndAddClass("p")
  // Adiciona o valor de horario como texto dentro do p recem criado
  timeP.textContent = time
  // Coloca o p dentro do div.time
  timeDiv.appendChild(timeP)
  // Coloca o div.time dentro do div.appointment
  appointmentDiv.appendChild(timeDiv)

  // Cria o elemento de HTML div.circle
  var circleDiv = createElementAndAddClass("div", "circle")
  // Coloca o div.circle dentro do div.appointment
  appointmentDiv.appendChild(circleDiv)

  // Cria o elemento de HTML div.event
  var eventDiv = createElementAndAddClass("div", "event")
  // Cria o elemento de HTML H2
  var eventH2 = createElementAndAddClass("h2")
  // Coloca o titulo da atividade como texto dentro do H2 recem criado
  eventH2.textContent = appointments[time]['title']
  // Cria o elemento de HTML p
  var eventP = createElementAndAddClass("p")
  // Coloca o nome da pessoa como texto dentro do p recem criado
  eventP.textContent = appointments[time]['person']
  // Coloca o H2 dentro do div.event
  eventDiv.appendChild(eventH2)
  // Coloca o p dentro do div.event
  eventDiv.appendChild(eventP)
  // Coloca o div.event dentro do div.appointment
  appointmentDiv.appendChild(eventDiv)  

  // Acessa o elemento div#schedule, que ja existe no nosso HTML
  var scheduleDiv = document.getElementById("schedule")
  // Coloca o div.appointment dentro do div#schedule
  scheduleDiv.appendChild(appointmentDiv)

  /**
   * Daqui pra baixo, vamos pintar apenas a bolinha que esta mais
   * proxima do horario atual de vermelho.
   * Lembrando que ja criamos algumas variaveis auxiliares para isso
   * antes de entrar dentro desse for...of loop.
   */

  // Novamente, criamos um objecto Date, com o horario de agora.
  var timeAppointment = new Date()
  // No objeto date recem criado, mudamos a hora para a hora que o
  // evento dessa iteracao deveria acontecer.
  timeAppointment.setHours(parseInt(time.split("h")[0]))
  // Agora, mudamos os minutos para os minutos que o evento dessa
  // iteracao deveria acontecer.
  timeAppointment.setMinutes(parseInt(time.split("h")[1]))
  // Finalmente criamos uma timestamp da data recem criada
  // e recem modificada.
  timeAppointment = timeAppointment.getTime()
  // Encontramos o modulo da diferenca entre a data do evento e a
  // data de agora. Usamos o Math.abs porque nao nos importamos com o 
  // sinal do resultado dessa subtracao, queremos apenas a quantidade
  // de segundos entre uma data e a outra.
  var timeDifference = Math.abs(timeAppointment - now)  
  // Agora verificamos se a diferenca entre o horario do evento dessa
  // iteracao e o horario de agora, e menor do que a menor diferenca
  // encontrada ate agora...
  if (timeDifference < smallestTimeDifference) {
    // Caso seja a menor diferenca, setamos a nossa variavel que
    // guarda o valor da menor diferenca, para essa nova menor
    // diferenca encontrada.
    smallestTimeDifference = timeDifference
    // Tambem salvamos o elemento de HTML div.circle dessa iteracao
    // para podermos pintar ele de vermelho depois.
    redCircle = circleDiv
  }
}

// Depois de verificar todos os eventos e encontrar qual o mais proximo
// do horario atual. Pintamos o div.circle desse envento de vermelho.
redCircle.style.backgroundColor = "red"