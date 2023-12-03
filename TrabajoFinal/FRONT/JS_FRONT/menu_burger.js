var boton= document.getElementById("bt_burger");
var itemMenu= document.getElementById("menu__item");

boton.addEventListener("click",(e)=>{
    itemMenu.classList.toggle("visible");

})