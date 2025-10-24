// Esperamos a que la pagina cargue completamente
document.addEventListener("DOMContentLoaded", function() {

  // Referencia a los elementos de la pagina que necesitamos
  const parrafo = document.getElementById("miParrafo");
  const boton = document.getElementById("btnCambiar");

  // Evento de click a boton
  boton.addEventListener("click", function() {
    parrafo.textContent = "Texto cambiado con JavaScript";
  });

});
