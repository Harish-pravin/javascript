let a=document.getElementById("card");
let profileDetails = {

    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",

    name: "Ravi",

    age: "age:25"

};
let b=document.getElementById("imgid");
b.src=profileDetails.imgSrc;
a.appendChild(b);

let head = document.createElement("h2");
head.textContent=profileDetails.name;
a.appendChild(head);

let d=document.createElement("h2");
d.textContent=profileDetails.age;
a.appendChild(d);
a.style.backgroundColor="pink";
b.style.marginRight="50%";
b.style.marginLeft="35%";
head.style.marginRight="43%";
head.style.marginLeft="43%";
d.style.marginRight="43%";
d.style.marginLeft="43%";
a.style.height="550px";
a.style.width="1000px"
a.style.marginRight="300px";
a.style.marginLeft="145px";
a.style.borderRadius="10px";





