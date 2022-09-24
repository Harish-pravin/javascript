let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
];
let a=document.getElementById("car");
function skill(labelId)
{
let l=document.getElementById("labelId");
l.classList.toggle("selected");
}
function box(cbox)
{
 let c="checkbox"+cbox.uniqueNo;
 let l1="label"+cbox.uniqueNo;
 let l2=document.createElement("li");
 a.appendChild(l2);
 let i=get.createElement("input");
 i.type="checkbox";
 i.id="cid";
}

