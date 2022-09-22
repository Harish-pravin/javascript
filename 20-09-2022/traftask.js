let a=document.getElementById("m");
let b=document.getElementById("n");
let c=document.getElementById("o");
let d=document.getElementById("p");
let e=document.getElementById("q");
let f=document.getElementById("r");
function stop()
{
    a.style.backgroundColor="red";
    c.style.backgroundColor="black";
    b.style.backgroundColor="black"; 
    d.style.backgroundColor="red";
    e.style.backgroundColor="white";
    f.style.backgroundColor="white";
}
function ready()
{
    b.style.backgroundColor="yellow"; 
    c.style.backgroundColor="black";
    a.style.backgroundColor="black";
    e.style.backgroundColor="yellow";
     d.style.backgroundColor="white";
     f.style.backgroundColor="white";
}
function go()
{
    c.style.backgroundColor="green";
    b.style.backgroundColor="black"; 
     a.style.backgroundColor="black";
     f.style.backgroundColor="green"; 
     d.style.backgroundColor="white";
     e.style.backgroundColor="white";
}