const sideButton = document.querySelector('#expandButtonJS');
const sideBar = document.querySelector('#sideBar');


function init(){
    sideButton.addEventListener('click',openSideBar);
}

function openSideBar(){
    sideBar.style.transform= 'translateX(0)';
    sideButton.removeEventListener('click',openSideBar);
    sideButton.addEventListener('click',closeSideBar);
}

function closeSideBar() {
    sideBar.style.transform= 'translateX(-100%)';
    sideButton.removeEventListener('click',closeSideBar);
    sideButton.addEventListener('click',openSideBar);
}

init()