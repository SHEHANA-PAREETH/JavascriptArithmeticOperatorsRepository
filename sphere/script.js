function spherevolume(){
let radius=document.getElementById("radius").value;
console.log(radius);
const pi=3.14;
let volume=(4/3)*pi*radius**3;
console.log(volume);
 let result=document.getElementById("result");
result.innerHTML=volume.toFixed(2);
result.style.border="1px solid black";  
result.style.width="200px";}
