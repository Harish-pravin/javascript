let a=document.getElementById("card");
a.classList.add("bg-primary","text-center","m-5","p-5");
let b=document.createElement("input");
b.type="checkbox";
b.id="inpid";
a.appendChild(b);
let c=document.createElement("label")
c.setAttribute("for","label")
c.textContent="click me!";
c.style.marginLeft="10px";
c.id="l";
a.appendChild(c);
