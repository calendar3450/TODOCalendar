const content = `Hello ${username}`;
const text = document.querySelector("#greed");

var i = 0;

function typing(){
    if (i < content.length) {
        let txt = content.charAt(i);
        text.innerHTML += txt;
        i++;
    }
}
setInterval(typing,200);

