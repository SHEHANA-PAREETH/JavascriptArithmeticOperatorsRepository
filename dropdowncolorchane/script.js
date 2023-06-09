function changeColor(){
    let colors=document.querySelector("#colorSelect");
    console.log(colors.value);
    let para=document.getElementById("paragraph");
    console.log(para);
para.style.color=colors.value;
   }
