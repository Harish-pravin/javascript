let a=5;
let b="";
for (i=1;i<=a;i++){
    for(j=1;j<=i;j++){
        b +="*";
    }
    b+="\n";
}
for (i=1;i<=a-1;i++){
    for(j=1;j<=a-i;j++){
        b +="*";
    }
    b +="\n";
}
console.log(b);
