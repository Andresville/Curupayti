window.addEventListener("DOMContentLoaded", (evento) =>{
    const menuBoton = document.getElementById("menu");
    const nav = document.querySelector("header nav");
    const body = document.querySelector("body");

    menuBoton.addEventListener("click", (evento) =>{
        menuBoton.classList.toggle("salir");
        nav.classList.toggle("visible");
        body.classList.toggle("no-scroll");
    });
});