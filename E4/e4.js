// Esperar a que el DOM este completamente cargado
document.addEventListener("DOMContentLoaded", function() {

  // Seleccionamos el parrafo y el boton
  const parrafo = document.getElementById("parrafoColorido");
  const boton = document.getElementById("btnColor");

  // Definimos los colores que iran rotando
  const colores = ["red", "green", "blue"];
  let indiceColor = 0;

  // Agregamos el evento al boton
  boton.addEventListener("click", function() {
    // Cambiar color del texto
    parrafo.style.color = colores[indiceColor];

    // Avanzar al siguiente color (circular)
    indiceColor = (indiceColor + 1) % colores.length;
  });

});
