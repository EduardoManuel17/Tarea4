document.addEventListener("DOMContentLoaded", function() {

  const input = document.getElementById("textoElemento");
  const boton = document.getElementById("btnAgregar");
  const lista = document.getElementById("listaElementos");

  boton.addEventListener("click", function() {
    const texto = input.value.trim(); // Quita espacios en blanco para evitar elementos vacios

    if (texto !== "") { 
      // Crear un nuevo elemento <li>
      const nuevoItem = document.createElement("li");
      nuevoItem.textContent = texto;

      // Agregarlo a la lista
      lista.appendChild(nuevoItem);

      // Limpiar el campo de texto
      input.value = "";
      input.focus();
    } else {
      alert("Por favor, escribe algo antes de agregar.");
    }
  });

});
