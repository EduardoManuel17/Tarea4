// Esperamos a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", function() {

  // Seleccionamos el boton y el parrafo donde mostraremos el conteo
  const boton = document.getElementById("btnClic");
  const textoContador = document.getElementById("contador");

  // Variable para contar los clics
  let contador = 0;

  // Evento click
  boton.addEventListener("click", function() {
    // Aumentar el contador
    contador++;

    // Actualizar el texto del parrafo
    textoContador.textContent = `Has hecho clic ${contador} ${contador === 1 ? "vez" : "veces"}.`;
  });

});
