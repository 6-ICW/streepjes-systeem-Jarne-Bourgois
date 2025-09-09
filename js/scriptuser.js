let huidigeKlas = null;
    let huidigeLeerling = null;
    let leerlingen = [];

    function selecteerKlas() {
      huidigeKlas = document.getElementById("klasSelect").value;
      if (!huidigeKlas) return alert("Kies eerst een klas!");

      leerlingen = JSON.parse(localStorage.getItem("leerlingen_" + huidigeKlas)) || [];

      if (leerlingen.length === 0) {
        alert("Nog geen leerlingen in deze klas! Vraag de admin om leerlingen toe te voegen.");
        return;
      }

      // vul dropdown met leerlingen
      const leerlingSelect = document.getElementById("leerlingSelect");
      leerlingSelect.innerHTML = `<option value="">-- Selecteer leerling --</option>`;
      leerlingen.forEach(l => {
        leerlingSelect.innerHTML += `<option value="${l.naam}">${l.naam}</option>`;
      });

      document.getElementById("klasSelectie").classList.add("hidden");
      document.getElementById("leerlingSelectie").classList.remove("hidden");
    }

    function selecteerLeerling() {
      huidigeLeerling = document.getElementById("leerlingSelect").value;
      if (!huidigeLeerling) return alert("Kies eerst een leerling!");

      toonStatus();
      document.getElementById("leerlingSelectie").classList.add("hidden");
      document.getElementById("status").classList.remove("hidden");
    }

    function toonStatus() {
      const leerlingen = JSON.parse(localStorage.getItem("leerlingen_" + huidigeKlas)) || [];
      const student = leerlingen.find(l => l.naam === huidigeLeerling);

      if (student) {
        document.getElementById("naam").innerText = student.naam;
        document.getElementById("streepjes").innerText = student.streepjes;
        document.getElementById("minpunten").innerText = student.minpunten;
      } else {
        document.getElementById("status").innerHTML = "<p>Geen data gevonden.</p>";
      }
    }