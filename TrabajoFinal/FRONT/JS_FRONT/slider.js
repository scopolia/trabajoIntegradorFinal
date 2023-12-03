
var contSlider= document.querySelector(".img");
var BtnSlider1 = document.getElementById("btn1");
var BtnSlider2 = document.getElementById("btn2");
var BtnSlider3 = document.getElementById("btn3");
var BtnSlider4 = document.getElementById("btn4");

var imagenes=["./img/slider1.jpg","./img/slider2.jpg","./img/slider3.webp", "./img/slider4.jpg"]
var btnSlider=[BtnSlider1,BtnSlider2,BtnSlider3,BtnSlider4]
const url= imagenes




contSlider.style.backgroundImage='url('+imagenes[0]+')';



btnSlider.forEach(btn => {
    
    btn.addEventListener("click",(e)=>{
        console.log(btn.id)
        if(btn.id =="btn1"){            
            contSlider.style.backgroundImage='url('+imagenes[0]+')';
            BtnSlider1.style.color="black"
        }else{BtnSlider1.style.color="red"}

        if(btn.id =="btn2"){
            contSlider.style.backgroundImage='url('+imagenes[1]+')';
            BtnSlider2.style.color="black"
        }else{BtnSlider2.style.color="red"}

        if(btn.id =="btn3"){
            contSlider.style.backgroundImage='url('+imagenes[2]+')';
            BtnSlider3.style.color="black"
        }else{BtnSlider3.style.color="red"}

        if(btn.id =="btn4"){
            contSlider.style.backgroundImage='url('+imagenes[3]+')';
            BtnSlider4.style.color="black"
        }else{BtnSlider4.style.color="red"}
        
    })
});

var posicion=0
setInterval(()=>{
        if (posicion==3)posicion=0
        else {posicion++}
        contSlider.style.backgroundImage='url('+imagenes[posicion]+')';
},7000);


