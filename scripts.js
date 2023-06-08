// Cambiar el color de fondo del encabezado al hacer scroll
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.style.backgroundColor = "#fff"; /* Cambiar el color de fondo a blanco */
    } else {
      header.style.backgroundColor = "#fad2e1"; /* Restaurar el color de fondo rosado pastel */
    }
  });
  
  // Validar el formulario de contacto
  var formulario = document.querySelector("form");
  formulario.addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    
    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
      event.preventDefault(); // Evitar que el formulario se envíe
      alert("Por favor, completa todos los campos del formulario.");
    }
  });
  
