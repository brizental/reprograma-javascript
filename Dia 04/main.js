var progresso = document.querySelectorAll('.progress'); //Recuperar todas as divs .progresso em um node list (comportamento de array)

function corRandom() { // Essa é a função que gera o código hexadecimal
  var letras = '0123456789ABCDEF'; //Criei uma variável com todas as possibilidades de nº e letras lidas pelo hexadecimal, tudo dentro de uma mesma string
  var cor = '#'; //Criei uma vaiável cor, que vai ser sobrescrita aqui embaixo
  for (j = 0; j < 6; j++) { //Abri um for pra iterar minha variável letras e modificar minha variável cor. Primeiro, crio um índice j que começa em 0, assim como as posições em arrays e strings. Delimito uma condição pro for. Para que a ação abaixo ocorra, o índice deve ser menor do que 6. Isso porque um código hex só tem 6 posições (#123456). Em seguida, incremento.
    cor = cor + letras[Math.floor(Math.random() * letras.length)]; //A ação do meu for é modificar o valor da variável cor de acordo com o resultado dessa função matemática. Mas não quero que ela sobrescreva totalmente a variável, senão a cor teria apenas um número/letra, sendo que preciso que ele tenha 6. Por isso, digo para somar o valor antigo de cor à função matemática. Toda vez que o for rodar, ele vai se somando aos resultados randômicos anteriores. Por fim, executei a função matemática random e multipliquei o resultado pelo tamanho da minha string com as possibilidades de número/letra. A multiplicação é necessária porque a função random sempre gera um número aleatório entre 0 e 1, e preciso de um número entre zero e o tamanho total da string, já que no final quero referenciar uma posição na string. Depois de multiplicar, utilizo a função floor para arredondar o número (fracionado) para um número inteiro abaixo dele. Assim, garanto que o número gerado não ultrapasse o tamanho da string e nem esteja quebrado. Isso tudo está entre colchetes porque quero que esse número inteiro aleatório entre 0 e o tamanho da string corresponda a uma posição dentro da string e imprima o conteúdo dessa posição (uma das letras ou um dos números).
  };
  return cor; //Depois de rodar por 6 vezes somando os números aleatórios à string #, tenho um código hex aleatório pronto pra ser usado.
};

  for (var i = 0; i < progresso.length; i++ ) { //Já que preciso criar um código html pra cada item do meu array progresso, crio um for e deilimito uma condição baseada no tamanho desse array.
    const div = document.createElement('div'); //Em seguida, construo o elemento div. A grande questão é NÃO colocar isso dentro de uma variável pura, que tem um escopo maior e acaba sobrescrita quando eu setar o time out lá embaixo. Por isso, construo uma constante, que funciona com escopo em bloco. Ela criará uma nova div todas as vezes.
    progresso[i].appendChild(div); //Aqui digo que a cada posição i no meu array progresso, quero adicionar um elemento div filho.
    var h1 = document.createElement('h1'); //Aqui crio meu h1
    progresso[i].appendChild(h1); //Aqui digo que para cada posição i no meu array, quero adicionar um elemento h1 filho.
    const contentText = progresso[i].dataset.percentage + '%'; //Crio uma nova constante dentro desse bloco, para que a propriedade width seja aplicada a todas as divs, e não somente à última graças ao timeout. Em seguida, digo que o conteúdo dessa constante é igual ao conteúdo do atributo data-percentage em cada posição i do meu array Por fim, concateno com a string % para que ela se some ao valor e seja lido como porcentagem pelo CSS.
    h1.textContent = contentText; //Aqui digo que o conteúdo do meu h1 é a constante que puxa o valor do data-percentage.
  
    setTimeout(function() { //Por fim, preciso que a width e a cor apareçam com o efeito transition que foi setado no SCSS, para isso uso o set time out, que diz para que esse bloco seguinte de código só seja exacutada depois de um tempo em milissegundos. Ela recebe dois parâmetros, uma função e um tempo. Aqui inicio a função.
      div.style.backgroundColor = corRandom(); //Peço para setar o background color executando minha função de cor aleatória.
      div.style.width = contentText; //Também peço para modificar meu width de acordo com a constante contentText, que muda de acordo com o índice i do array progresso, pois está dentro de um for.
    }, 100); //Esse é o número de milissegundos que vai demorar para executar as duas últimas linhas de código.
};





