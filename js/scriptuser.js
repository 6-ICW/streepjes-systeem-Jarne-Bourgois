
 function toonStatus() {
      const leerlingen = JSON.parse(localStorage.getItem("leerlingen")) || [];
      const currentUser = localStorage.getItem("currentUser");
      const student = leerlingen.find(l => l.naam === currentUser);

      if (student) {
        document.getElementById("naam").innerText = student.naam;
        document.getElementById("streepjes").innerText = student.streepjes;
        document.getElementById("minpunten").innerText = student.minpunten;
      } else {
        document.getElementById("status").innerText = "Geen data gevonden.";
      }
    }

    window.onload = toonStatus;