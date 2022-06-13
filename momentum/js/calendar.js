const todoList = document.querySelector('#todo-list');
const input = document.querySelector('.todoForm');



let date = new Date();
let currentMon = date.getMonth()+1;   
let currentYear = date.getFullYear();
let currentDay = date.getDate();
let storeToDo = [];
let year = currentYear;
let mon = currentMon-1;

let DayOfChoice = currentDay;
let MonOfChoice = currentMon;
let yearOfChoice = currentYear;

let TODOS_KEY = new Date(currentYear+"-"+currentMon+"-"+currentDay);

const renderCalender = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';
    dates[i] = `<div id="clickDate" class="date " onclick='clickDate(event)'><span class="${condition} D${condition}${date}">${date}</span></div>`;
  });
  
  document.querySelector('.dates').innerHTML = dates.join('');

  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
};

renderCalender();

const selectDay = (day) =>{
  const today=document.querySelector(`.Dthis${day}`);
  today.classList.toggle('chooseDay');
};

const clickDate= (e)=>{
  removeToDo();
  renderCalender();
  const currentDay=e.currentTarget.innerText;
  selectDay(currentDay)

  TODOS_KEY= new Date(year,mon,currentDay);

  const savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos !== null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
    }

  toDos=[];
  
  if(localStorage.getItem(`${TODOS_KEY}`) == null){
    localStorage.removeItem(`${TODOS_KEY}`);
  }
  else{
    toDos.push(localStorage.getItem(`${TODOS_KEY}`));
  }
  
};


const prevMonth = () => {
  mon-=1
  date.setMonth(date.getMonth() - 1);
  renderCalender();
};

const nextMonth = () => {
  mon+=1
  date.setMonth(date.getMonth() + 1);
  renderCalender();
};

const goToday = () => {
  date = new Date();
  renderCalender();
};

const toDoForm =document.querySelector("#todo-form");
const toDOInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");


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
function removeToDo(event){
  while (toDoList.firstChild){
    toDoList.removeChild(toDoList.firstChild);
  }
}

function confirmTodo(event){
    const li =event.target.parentElement;
    document.querySelector("li").style.textDecoration = "line-through";
}

function paintToDo(newTodo){//todo리스트에 추가 시키기
    const listTodo = document.createElement("li");
    listTodo.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText = (`${newTodo.text}`);

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



 

