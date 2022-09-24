let a=document.getElementById("v1");
let con=document.getElementById("con");
let b=document.getElementById("v2");
let c=document.getElementById("inid");
let d=document.getElementById("result");
let t=document.getElementById("t");
let s="congratulation! you got it right";
let e="please try again later!";
let i=document.createElement("img");
i.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/sum-of-two-numbers-img.png";
i.id="imgid";
con.appendChild(i);
function reset(){
    let fn=Math.random()*100;
    let sn=Math.random()*100;
    a.textContent=Math.ceil(fn);
    b.textContent=Math.ceil(sn);
    c.value="";
    d.textContent="";
    d.style.backgroundColor="white";
}
reset();
function check() {
    let fri=parseInt(a.textContent);
    let sri=parseInt(b.textContent);
    let user=parseInt(c.value);
    let sum=fri+sri;
 
    if(user===sum){
        d.textContent=s;
        d.style.backgroundColor="cyan";
    }
    else{
        d.textContent=e;
        d.style.backgroundColor="pink";
    }
    
}
i.style.width="300px";
t.style.marginLeft="450px";
let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
b1.style.backgroundColor="gold";
b2.style.backgroundColor="gold";
b1.style.borderRadius="15px";
b2.style.borderRadius="15px";
b2.style.marginLeft="100px";
b1.style.marginLeft="50px";
b1.style.marginTop="30px";
d.style.padding="20px";
d.style.width="300px"
d.style.borderRadius="20px";
d.style.marginLeft="30px";
d.style.marginTop="20px";
