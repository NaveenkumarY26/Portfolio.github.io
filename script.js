let hamburger=document.querySelector(".hamburger")
hamburger.addEventListener("click",togglemenu)

function togglemenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}