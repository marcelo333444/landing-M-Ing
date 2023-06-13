//Menu
const mostrarMenu = document.querySelector('#menu')
const contenidoMenu = document.querySelector('#options')


mostrarMenu.addEventListener('click', () => {
    mostrarMenu.classList.toggle('animacionMenu')
    contenidoMenu.classList.toggle('activeMenu')
});

//Scroll
let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector("nav");

/* --evento scroll */
window.addEventListener("scroll", function() {
    let desplazamientoActual = window.pageYOffset;

    /* -- ocultar o mostrar el menu */
    if(ubicacionPrincipal >= desplazamientoActual) {
        $nav.style.top = "0px";
        console.log('Ubicacion Principal')
        console.log(ubicacionPrincipal)
        console.log('desplazamiento')
        console.log(desplazamientoActual)
    } else {
        /* --se oculta añadiendo un top negativo */
        $nav.style.top = "-80px";
        console.log('Ubicacion Principal')
        console.log(ubicacionPrincipal)
        console.log('desplazamiento')
        console.log(desplazamientoActual)
    }
    ubicacionPrincipal = desplazamientoActual;
});


//SWIPER
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 16,
});












