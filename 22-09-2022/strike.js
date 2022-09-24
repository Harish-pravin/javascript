let a=document.getElementById("did")
let b=document.createElement("input");
a.classList.add("text-center","p-5","bg-danger","m-5");
b.type="checkbox";
b.id="aid";
let c=document.createElement("label");
c.innerText="iam a label";
c.id="bid";
a.appendChild(b);
a.appendChild(c);
let i=0;
b.onclick=function(){
    if (i%2==0){
        c.style.textDecoration="line-through";
    }
    else{
        c.style.textDecoration="none";
    }
    i=i+1;
}