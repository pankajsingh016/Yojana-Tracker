const todoForm = document.querySelector("form");
const inputForm = document.getElementById("input-todo");
const todoList = document.getElementById("todo-area");

let todos = [];

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  let todoText = inputForm.value;
  if (todoText.length > 0) {
    todos.push({
        todo:todoText,
        done:false
    });
    renderTodos();
    inputForm.value = "";
  }
}


function createTodo(element,todoIndex){

    const todoliel = document.createElement("li");
    const todoText = element.todo;
    const status = element.done;
    const todoLIInnerHTML = `<input type="checkbox"  id="todo-${todoIndex}">
        <label for="todo-${todoIndex}" class="custom-checkbox"></label>
        <label for="todo-${todoIndex}" class="todo-content">${todoText}</label>
        <button onclick="DeleteTodo(${todoIndex})" class="delete-btn"><svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>`
    todoliel.className = "todo";
    todoliel.innerHTML = todoLIInnerHTML;
    return todoliel;
}


function renderTodos(){
    todoList.innerHTML = "";
    todos.forEach((todos,todoIndex)=>{
        todoItem = createTodo(todos,todoIndex);
        todoList.append(todoItem);
    })

}


function DeleteTodo(todoIndex){
    let to = [];
    for(let i=0;i<todos.length;i++)
    {
        if(i==todoIndex){continue};
        to.push(todos[i]);
    }
    todos = to;
    renderTodos();
}