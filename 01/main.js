var form = document.getElementById("input")
form.addEventListener("submit", function (event) {
  // Nao permitir comportamento padrao do navegador
  event.preventDefault()
  // Capturar o elemento de input
  var todoInput = document.querySelector("#input input")
  // Capturar text do input
  var todoText = todoInput.value
  // Checar se tem texto no input
  if (todoText !== "") {
    // Criar novo li 
    var newTodoItem = document.createElement("li")
    // Criar text que vai dentro de novo li
    var newTodoItemText = document.createTextNode(todoText)
    // Colocar texto dentro do li
    newTodoItem.appendChild(newTodoItemText)
    // Capturar elemento da lista
    var todoList = document.getElementById("list")
    // Colocar novo li dentro da lista
    todoList.appendChild(newTodoItem)
    // Escutar eventos de click no list item recem criado
    newTodoItem.addEventListener("click", function(event) {
      // Checa se o elemento ja esta marcado como feito
      if (this.classList.contains("done")) {
        // Caso ja esteja, marca como "nao feito"
        this.classList.remove("done")
      } else {
        // Caso nao esteja marca como "feito"
        this.classList.add("done")
      }
    })
    // Limpar meu input
    todoInput.value = ""
  }
})