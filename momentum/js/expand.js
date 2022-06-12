const sideButton = document.querySelector('#expandButtonJS');
const sideBar = document.querySelector('.sideBar');
const addURL = document.querySelector('.addURL');
const sideBarBox = document.querySelector('.sideBarBox');

const URLAdder = document.querySelector('.URLAdder');
const URLNameAdder = URLAdder.querySelector('.URLNameAdder');
const URLAddressAdder = URLAdder.querySelector('.URLAddressAdder');

function init(){
    sideButton.addEventListener('click',openSideBar);
    addURL.addEventListener('click',addURLSite);
    URLAdder.addEventListener('submit',makeURLli);
}

function openSideBar(){
    sideBar.style.transform= 'translateX(0%)';
    sideButton.removeEventListener('click',openSideBar);
    sideButton.addEventListener('click',closeSideBar);
}

function closeSideBar() {
    sideBar.style.transform= 'translateX(-100%)';
    sideButton.removeEventListener('click',closeSideBar);
    sideButton.addEventListener('click',openSideBar);
    URLAdder.classList.add('hidden');
}

function addURLSite() {
    URLAdder.classList.remove('hidden');
    addURL.removeEventListener('click',addURLSite);
    addURL.addEventListener('click',hideURL);
}

function makeURLli(){
    const URLList = document.createElement('li');
    const URLsite=document.createElement('a');
    const newURL=URLNameAdder.value;
    const newURLAddress = URLAddressAdder.value;
    URLsite.href=newURLAddress;
    URLsite.innerText=newURL;
    hideURL();

    sideBarBox.appendChild(URLList);
    URLList.appendChild(URLsite);
}

function hideURL(){
    URLAdder.classList.add('hidden');
    addURL.addEventListener('click',addURLSite);
}
init();