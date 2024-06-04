document.getElementById("toggleMenu").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
      document.getElementById("toggleMenu").textContent = "Fechar Menu";
      setTimeout(function() {
        menu.style.display = "none";
        document.getElementById("toggleMenu").textContent = "Abrir Menu";
      }, 6000); // Fecha o menu após 6 segundos (6000 milissegundos)
    } else {
      menu.style.display = "none";
      document.getElementById("toggleMenu").textContent = "Abrir Menu";
    }
  });
