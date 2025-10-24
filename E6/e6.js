// Esperamos que el DOM este listo
document.addEventListener("DOMContentLoaded", function() {

  // Seleccionamos los elementos del formulario
  const formulario = document.getElementById("miFormulario");
  const inputNombre = document.getElementById("nombre");
  const mensaje = document.getElementById("mensaje");

  // Evento al enviar el formulario
  formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita que la pagina se recargue

    const nombre = inputNombre.value.trim(); // Quitar espacios

    if (nombre === "") {
      // Mostrar mensaje de error
      mensaje.textContent = "Por favor, escribe tu nombre.";
      mensaje.className = "error";
    } else {
      // Mostrar mensaje de exito
      mensaje.textContent = `Formulario enviado correctamente. ¡Hola, ${nombre}!`;
      mensaje.className = "exito";

      // Limpiar el campo de texto
      inputNombre.value = "";
    }
  });

});
