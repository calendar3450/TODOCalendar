const toDoForm =document.querySelector("#todo-form");
const toDOInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY="toDos";

let toDosProgressMax=0
let toDosProgressValue = 0;
let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li =event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !==parseInt(li.id));
    li.remove()
    saveToDos()
    
}

function confirmTodo(event){
    const li =event.target.parentElement;
    document.querySelector("li").style.textDecoration = "line-through";

}

function paintToDo(newTodo){//todo리스트에 추가 시키기
    const listTodo = document.createElement("li");
    listTodo.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const confirmButton = document.createElement("button");
    confirmButton.classList.add('todoButton');
    confirmButton.innerText = "✔";
    confirmButton.addEventListener("click", confirmTodo);
    confirmButton.id="confirm";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add('todoButton');
    deleteButton.innerText = "❌";
    deleteButton.addEventListener("click", deleteToDo);

    listTodo.appendChild(span);
    listTodo.appendChild(confirmButton);
    listTodo.appendChild(deleteButton);
    toDoList.appendChild(listTodo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDOInput.value;
    toDOInput.value="";
    const newTodoObj ={
        text: newTodo,
        id:Date.now(),
    };
    

    toDos.push(newTodoObj);//리스트에 넣기.
    paintToDo(newTodoObj);
    saveToDos();
}



toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
    }



