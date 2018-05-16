let form = document.getElementById('input');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let tarefa = form.tarefa.value;
    let lista = document.querySelector('#list');

    if (tarefa.length > 0) {
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        lista.appendChild(novaTarefa);
        form.reset();

        novaTarefa.addEventListener('click', function(event) {
            if (event.target.classList.contains('done') === true) {
                event.target.classList.remove("done");
            }  else {
                event.target.classList.add("done");
            }
        });

        // let todasTarefas = document.querySelectorAll('li');
        // for (let i = 0; i < todasTarefas.length; i++) {
        //     console.log('todasTarefas[i]', todasTarefas[i]);
        //     todasTarefas[i].addEventListener('click', function(event) {
        //         console.log('event.target', event.target);
        //         if (event.target.classList.contains('done') === true) {
        //             event.target.classList.remove("done");
        //             console.log('tem classe');
        //         }  else {
        //             event.target.classList.add("done");
        //             console.log('não tem não');
        //         }
        //     });
        // };
    }
});
