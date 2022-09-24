let a=document.getElementById("con");
let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

 let b=document.createElement("h1");
 b.textContent=recipeObj.title;
 a.appendChild(b);
 let c=document.createElement("img");
 c.src=recipeObj.imgSrc;
 a.appendChild(c);
 c.style.width="50%";

let k=document.getElementById("ulid");
let st=recipeObj.ingredients;
for(let i of st){
 let u=document.createElement("li");   
u.textContent=i;
k.appendChild(u);
}
let n=document.getElementById("cont");
n.style.marginLeft="400px";
k.style.backgroundColor="lightblue";
k.style.width="450px";
k.style.borderRadius="10px";
k.style.marginTop="25px";
b.style.color="red";