var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodoList() {
    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElment = document.createElement('a');
        linkElment.setAttribute('href', '#')
        var position = todos.indexOf(todo);
        linkElment.setAttribute('onclick', 'deleteTodo('+ position +')');

        var linkText =  document.createTextNode('Excluir');
        
        linkElment.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElment);

        listElement.appendChild(todoElement);

    }
}

renderTodoList();

function addTodo() {

    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodoList();
    saveToStorage();
}

function deleteTodo(position) {
    todos.splice(position, 1);
    renderTodoList();
    saveToStorage();
}

btnElement.onclick = addTodo;


function saveToStorage() {

    localStorage.setItem('list_todos', JSON.stringify(todos));
}
