/**
 * Temos tres funcoes que encontram uma cor randomica no CSS,
 * as tres funcoes sao validas e fazem, mais ou menos,
 * a mesma coisa de formas diferentes.
 */

function getRandomColor() {
  // Primeiro criamos uma array com todas as cores que tem 
  // uma string reservada no CSS.
  var colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
  // Depois criamos uma index aleatorio que pode ir de 0 até
  // o maior index existente na array "colors"
  var index = Math.floor(Math.random() * colors.length)
  // Finalmente retornamos o item da array colors que esta nesse index aleatorio.
  return colors[index]
}

function getRandomColorMilena() {
  // Primeiro criamos uma string com todos os carateres possiveis em
  // uma string de hex color.
  // https://developer.mozilla.org/pt-PT/docs/Web/CSS/color
  var letras = '0123456789ABCDEF'
  // Agora criamos uma string somente com o caractere '#'.
  var cor = "#"
  // Sabemos que uma cor em hexadecimal tem o # e mais 6 caracteres, 
  // portanto criamos um loop que roda 6 vezes para podermos adicionar
  // esses seis caracteres que faltam a nossa string de cor.
  for (var j = 0; j < 6; j++) {
    // Pegamos um caractere aleatorio da string "letras" a cada iteracao
    // desse loop e adicionamos a string "cor".
    cor = cor + letras[Math.floor(Math.random() * letras.length)]
  }
  // Finalmente, retornamos a string "cor" que e um valor de cor hexadecimal.
  return cor
}

function getRandomColorBruna() {
  // Simplesmente, criamos um valor randomico entre 0 e 16777215 e 
  // utilizando o metodo "toString" do numero em javascript, ele 
  // transforma esse numero em um string hexadecimal.
  // https://en.wikipedia.org/wiki/Hexadecimal
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

/**
 * Aqui, criamos uma funcao que recebe como argumento um numero de
 * 0 a 100 que representa uma porcentagem e tambem um elemento de 
 * HTML, que servira como container, para criar uma barra de progresso.
 */

function createProgressBar(percentage, containerDiv) {
  // Cria um elemento de HTML h1.
  const percentageH1 = document.createElement("h1")
  // Adiciona o valor de porcentagem passado como argumento mais
  // o simbolo de porcentagem como texto ao h1 recem criado.
  percentageH1.textContent = percentage + "%"
  // Coloca o h1 recem criado dentro do containerDiv passado como argumento.
  containerDiv.appendChild(percentageH1)

  // Cria um elemento div que sera a nossa barra de progresso.
  const progressBar = document.createElement("div")
  // Pinta essa barra de progresso com uma cor randomica do CSS.
  progressBar.style.backgroundColor = getRandomColor()
  // O codigo que esta dentro do setTimeout so roda depois de 100ms.
  // Nesse caso o 100ms vem do segundo argumento passado a funcao.
  setTimeout(() => {

    /**
     * Queremos que esse codigo rode apos 100ms, porque se ele rodar 
     * assim que o codigo for executado, iniciaremos o width da nossa barra
     * direto com o valor desejado e isso nao permitira ao CSS fazer a
     * transicao/animacao da barra "crescendo" quando carregamos a pagina.
     * Fazendo com que esse codigo rode apenas um pouco depois do carregamento
     * da pagina, permitimos que a barra comece com 0px de width e depois
     * receba a width correta a partir da porcentagem, o que faz com que a
     * transicao do CSS aconteca.
     */

    // Seta a width dessa bara de acordo com o valor de porcentagem passado.
    progressBar.style.width = percentage + "%"
  }, 100)
  // Coloca essa barra de progresso dentro do containerDiv.
  containerDiv.appendChild(progressBar)
}

/**
 * Agora que ja criamos todas as funcoes necessarias, 
 * podemos interagir com o nosso HTML...
 */ 

// Primeiro selecionamos todos os elementos da pagina com a classe "progress"
const progress = document.querySelectorAll(".progress")
// Agora loopamos a array de elementos recem-criada...
for (const div of progress) {
  // Pegar o valor que esta no atributo "data-percentage" desse elemento...
  const percentage = div.dataset.percentage
  // Usando a funcao createProgressBar, geramos o HTML necessario
  // para as barras de progresso.
  createProgressBar(percentage, div)
}