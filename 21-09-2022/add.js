let a=document.getElementById("cb");
let b=document.getElementById("ulid");
let c=document.getElementById("btn");
let d=document.getElementById("dd");
let e=document.getElementById("h");
a.style.marginRight="300px";
a.style.marginLeft="300px";
c.style.marginLeft="-240px";
c.style.marginRight="-240PX"
d.style.marginRight="300px";
d.style.marginLeft="300px";
c.style.backgroundColor="lightblue";
e.style.marginRight="300px";
e.style.marginLeft="400px";
e.style.marginRight="400px";
e.style.marginLeft="300px";

function add()
{
    let l=document.createElement("li");
    l.textContent=a.value;
    a.value="";
    b.appendChild(l);

}
