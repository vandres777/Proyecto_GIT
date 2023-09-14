function mostrarContenido(idContenido) {
  // Oculta todos los contenidos
  var contenidos = document.querySelectorAll('.content > div');
  contenidos.forEach(function (contenido) {
    contenido.style.display = 'none';
  });

  // Muestra el contenido seleccionado
  var contenidoMostrar = document.getElementById(idContenido);
  contenidoMostrar.style.display = 'block';
}