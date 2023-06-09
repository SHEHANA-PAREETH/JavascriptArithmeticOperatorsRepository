
function changeimage(){
    let slides=document.getElementById("image1");
    if (slides.src.match("./images/im1.jpg"))
    slides.src="./images/im2.jpg"
    else if(slides.src.match("./images/im2.jpg"))
    slides.src="./images/im3.jpg"
    else 
    slides.src="./images/im1.jpg"
    


}
    
