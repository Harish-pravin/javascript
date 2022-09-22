let a=document.getElementById("para");
a.style.color="Red";
a.style.textAlign="center";
a.style.backgroundColor="cyan";
a.style.fontSize="40px"

function add(){
let pv=a.textContent;
let uv=parseInt(pv)+1;
if (uv>0){
    a.style.color="green";
}
a.textContent=uv;
}
function sub(){
    let pv=a.textContent;
    let uv=parseInt(pv)-1;
    if (uv<0) {
        a.style.color="red";
    }
    a.textContent=uv;
}
function reset(){
    a.textContent=0;
    a.style.color="white";
}
