document.addEventListener("DOMContentLoaded", function() {

  // Seleccionamos el boton y el div que es el bloque a mostrar/ocultar
  const boton = document.getElementById("btnToggle");
  const bloque = document.getElementById("miDiv");

  // Agregamos el evento al boton
  boton.addEventListener("click", function() {
    // Alternamos la clase "oculto" en el div
    bloque.classList.toggle("oculto");
  });

});
