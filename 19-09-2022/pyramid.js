let a=5;
let b="";
for(i=0;i<a;i++){
    for(j=0;j<a-i-1;j++)
    {
        b+=" ";
    }
    for(k=0;k<i*2+1;k++){ 
        b+="*";
    }
    b+="\n";
}
console.log(b);