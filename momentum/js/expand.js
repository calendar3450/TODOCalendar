const sideButton = document.querySelector('#expandButtonJS');
const sideBar = document.querySelector('.sideBar');
const addURL = document.querySelector('.addURL');
const sideBarBox = document.querySelector('.sideBarBox');
const sideBarBox2 = document.querySelector('.sideBarBox2');
const addSomething = document.querySelector('.addSomething');
const inputSomething = document.querySelector('.inputSomething');
const memoForm = document.querySelector('.memoForm');

const URLAdder = document.querySelector('.URLAdder');
const URLNameAdder = URLAdder.querySelector('.URLNameAdder');
const URLAddressAdder = URLAdder.querySelector('.URLAddressAdder');

function init(){
    sideButton.addEventListener('click',openSideBar);
    addURL.addEventListener('click',addURLSite);
    URLAdder.addEventListener('submit',makeURLli);
    addSomething.addEventListener('click',inputSomethinginMemo);
    memoForm.addEventListener('submit',addSomethinginMemo);
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

function inputSomethinginMemo () {
    inputSomething.classList.remove('hidden');
    addSomething.removeEventListener('click',inputSomethinginMemo);
    addSomething.addEventListener('click',hideMemo);
}

function hideMemo(){
    inputSomething.classList.add('hidden');
    addSomething.removeEventListener('click',hideMemo);
    addSomething.addEventListener('click',inputSomethinginMemo)
}

function addSomethinginMemo() {
    const memoList=document.createElement('li');
    const memoContents= document.createElement('a');
    const memo=inputSomething.value;
    memoContents.innerText=memo;
    sideBarBox2.appendChild(memoList);
    memoList.appendChild(memoContents);
    hideMemo();
}

init();