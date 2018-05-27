const colunas = document.querySelectorAll('.coluna')
for (const col of colunas) {
    const divsClicaveis = col.children
    for (let i = 0; i < divsClicaveis.length; i++) {
        divsClicaveis[i].addEventListener('click', function(event){
            const cor = event.target.style.backgroundColor
            const parent = event.target.parentElement
            const sibling = parent.nextElementSibling
            if (typeof sibling !== null) {
                const divsPrimas = sibling.children
                divsPrimas[Math.floor(i/2)].style.backgroundColor = cor
            }
        })
    }
}



