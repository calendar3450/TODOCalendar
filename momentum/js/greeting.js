const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

let i = 0;
function onLoginSubmit(tomato){
    tomato.preventDefault();// 새로고침을 안함 addEventListener에서 submit을 통해 새로고침을 해야하지만 못하게 막음
    const username=loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);

    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings();
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    setInterval(typing,300);
}


function typing(){
    let txt = content[i++];
    greeting.innerHTML += txt;
    if (i> content.length){
        greeting.textContent="";
        i=0;
    }
}

loginForm.addEventListener("submit", onLoginSubmit)

const savedUsername=localStorage.getItem(USERNAME_KEY);
const content = `Hello ${savedUsername}`;

if(savedUsername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
}