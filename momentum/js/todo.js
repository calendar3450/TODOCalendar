const toDoForm =document.querySelector("#todo-form");
const toDOInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event){
    const li =event.target.parentElement;
    li.remove()
}


function paintToDo(newTodo){//todo리스트에 추가 시키기
    const listTodo = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "✂︎";
    button.addEventListener("click", deleteToDo);
    listTodo.appendChild(span);
    listTodo.appendChild(button);
    
    toDoList.appendChild(listTodo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDOInput.value;
    toDOInput.value="";
    paintToDo(newTodo);
}


toDoForm.addEventListener("submit",handleToDoSubmit);