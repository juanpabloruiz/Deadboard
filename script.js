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
      var totalDays = 365.25 * 100;
      
      // Calcular el progreso
      var progress = (daysAlive / totalDays) * 100;
      
      // Actualizar la barra de progreso
      document.getElementById("progressBar").style.width = progress + "%";
    }
  
    // Función para calcular y mostrar el contador de cuenta regresiva
    function updateCountdown() {
      // Fecha de nacimiento
      var birthDate = new Date("1980-06-19");
      
      // Fecha actual
      var currentDate = new Date();
      
      // Diferencia en milisegundos
      var difference = birthDate.getTime() - currentDate.getTime();
      
      // Convertir milisegundos a segundos
      var totalSeconds = Math.abs(Math.floor(difference / 1000));
  
      // Calcular años, meses, semanas, días, horas, minutos y segundos restantes
      var years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
      var months = Math.floor((totalSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
      var weeks = Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (7 * 24 * 60 * 60));
      var days = Math.floor((totalSeconds % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
      var hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      var minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      var seconds = totalSeconds % 60;
  
      // Mostrar el contador de cuenta regresiva
      document.getElementById("countdown").innerHTML = "Tiempo restante hasta los 100 años:<br> " + years + " años, " + months + " meses, " + weeks + " semanas, " + days + " días, " + hours + " horas, " + minutes + " minutos, " + seconds + " segundos.";
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
  