document.addEventListener("DOMContentLoaded", function() {
  // Función para calcular el progreso y actualizar la barra de progreso
  function updateProgressBar() {
    // Fecha de nacimiento
    var birthDate = new Date("1980-06-19");
    
    // Fecha actual
    var currentDate = new Date();
    
    // Diferencia en milisegundos
    var difference = currentDate - birthDate;
    
    // Convertir milisegundos a días
    var daysAlive = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    // Total de días aproximado en una vida
    var totalDays = 365.25 * 70;
    
    // Calcular el progreso
    var progress = (daysAlive / totalDays) * 100;
    
    // Actualizar la barra de progreso
    document.getElementById("progressBar").style.width = progress + "%";
  }

  // Función para calcular y mostrar el contador de cuenta regresiva en segundos
  function updateCountdown() {
    // Fecha de nacimiento
    var birthDate = new Date("1980-06-19");

    // Fecha cuando se cumplen 100 años
    var futureDate = new Date(birthDate);
    futureDate.setFullYear(futureDate.getFullYear() + 100);

    // Fecha actual
    var currentDate = new Date();
    
    // Diferencia en milisegundos
    var difference = futureDate - currentDate;
    
    // Convertir milisegundos a segundos
    var totalSeconds = Math.floor(difference / 1000);

    // Formatear los segundos con puntos
    var formattedSeconds = totalSeconds.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Mostrar el contador de cuenta regresiva solo en segundos
    document.getElementById("countdown").innerHTML = "<h5>Me quedan:</h5><h4>" + formattedSeconds + " segundos.</h4>";
  }

  // Actualizar el progreso y el contador cada segundo
  setInterval(function() {
    updateProgressBar();
    updateCountdown();
  }, 1000);

  // Actualizar la barra de progreso y el contador al cargar la página
  updateProgressBar();
  updateCountdown();
});
