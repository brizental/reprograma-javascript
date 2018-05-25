// Aqui, selecionamos o elemento com o id "knob" na pagina.
// Esse elemento e a bolinha branca do nosso slider.
const knob = document.getElementById("knob")
// Aqui, selecionamos o elemento com o id "slider" na pagina.
// Esse elemento e parte cinza onde a bolinha "anda" no nosso slider.
const slider = document.getElementById("slider")
// Aqui, selecionamos o elemento com o id "audio" na pagina.
// Esse elemento nao aparece na pagina, mas e o elemento que tem a musica
// que deve tocar sempre que abrimos nossa pagina.
const audio = document.getElementById("audio")
// Primeiramente, mudamos nosso volume para 0, 
// ja que ele comeca no 0 e somente ao deslizar o slider ele aumenta.
audio.volume = 0

// Criamos uma variavel auxiliar, para saber se o botao do mouse 
// esta sendo clicado ou nao. Iniciamos ela com o valor "false",
// porque quando a pagina carrega, o mouse nao esta sendo clicado.
let mouseClicked = false
// Criamos uma variavel auxiliar para salvar a posicao do mouse
// assim que o mouse foi clicado.
let mouseClickedPosition = undefined
// Criamos uma variavel auxiliar para salvar o valor da distancia 
// horizontal inicial do knob em relacao ao extremo esquerdo do slider.
let knobInitialLeft = undefined

// Criamos outras duas constantes que vao salvar o valor da
// posicao X da extrema esquerda e extrema direita do slider.
// Precisamos dessa duas constantes, porque elas e que vao limitar o
// movimento do knob, ja que ele deve ficar contido dentro do slider.
const sliderLeft = slider.getBoundingClientRect().left
const sliderRight = slider.getBoundingClientRect().right

// Escutamos pelo evento de "mousedown" no knob.
// Esse evento e diferente do "click", porque ele e acionado quando
// voce pressiona o mouse apenas.
knob.addEventListener("mousedown", event => {
  // Mudamos a nossa auxiliar mouseClicked para true, ja que agora sim
  // o mouse esta sendo clicado.
  mouseClicked = true
  // Setamos a variavel mouseClickedPosition para a posicao X
  // do mouse no momento do clique.
  mouseClickedPosition = event.clientX
  // Setamos a variavel knobInitialLeft para a distancia esquerda do
  // knob em relacao ao extremo esquerdo do seu "pai", o slider.
  knobInitialLeft = knob.offsetLeft
})

// Escutamos pelo evento de mousemove na pagina toda, nao somente sobre
// o knob, porque independentemente do mouse estar ou nao sobre o knob,
// se ele tiver sido clicado sobre o knob, queremos que ele mova o knob.
document.addEventListener("mousemove", event => {
  // Mas so queremos que ele mova o knob, se o mouse tiver sido clicado
  // sobre o knob e tambem se o knob estiver dentro dos limites do slider...
  if (mouseClicked
      && event.clientX > sliderLeft
      && event.clientX < sliderRight) {
    // Caso a condicional seja satisfeita, calculamos a diferenca entre
    // a posicao inicial do mouse, que salvamos no evento de "mousedown",
    // e a posicao atual do mouse.
    const diffX = event.clientX - mouseClickedPosition
    // Finalmente, pegamos o valor inicial de left do knob + o tanto
    // que o mouse foi movido e setamos a propriedade left atualizada
    // para o knob se mover.
    knob.style.left = knobInitialLeft + diffX + "px"
    // Finalmente mapeamos essa posicao do knob em relacao ao slider
    // para um valor entre 0 e 1 usando uma regra de tres.
    const volume = (event.clientX - sliderLeft) / (sliderRight - sliderLeft)
    // Finalmente mudamos o volume do audio baseado na posicao do knob.
    audio.volume = volume
  }
})

// Escutamos pelo evento de mouse up na pagina toda, e sempre que ele
// acontecer, resetamos as nossas variaveis auxiliares para o valor 
// inicial delas, que e quando o knob nao esta sendo movido.
document.addEventListener("mouseup", event => {
  mouseClicked = false
  mouseClickedPosition = undefined
  knobInitialLeft = undefined
})