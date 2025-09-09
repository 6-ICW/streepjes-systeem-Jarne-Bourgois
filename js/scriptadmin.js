 let huidigeKlas = null;
    let leerlingen = [];

    function selecteerKlas() {
      huidigeKlas = document.getElementById("klasSelect").value;
      if (!huidigeKlas) return;

      // Data ophalen of nieuw aanmaken voor de gekozen klas
      leerlingen = JSON.parse(localStorage.getItem("leerlingen_" + huidigeKlas)) || [];
      document.getElementById("klasSelectie").classList.add("hidden");
      document.getElementById("adminContent").classList.remove("hidden");
      renderTabel();
    }

    function renderTabel() {
      const tbody = document.getElementById("studentTable");
      tbody.innerHTML = "";
      leerlingen.forEach((l, i) => {
        tbody.innerHTML += `
          <tr>
            <td>${l.naam}</td>
            <td>${l.streepjes}</td>
            <td>${l.minpunten}</td>
            <td>
              <button onclick="updateStreepje(${i}, 1)">+</button>
              <button onclick="updateStreepje(${i}, -1)">-</button>
              <button onclick="verwijderLeerling(${i})">🗑️</button>
            </td>
          </tr>
        `;
      });
      localStorage.setItem("leerlingen_" + huidigeKlas, JSON.stringify(leerlingen));
    }

    function updateStreepje(index, change) {
      const reden = prompt("Geef een reden voor deze actie:");
      if (!reden) return;

      leerlingen[index].streepjes += change;
      if (leerlingen[index].streepjes < 0) leerlingen[index].streepjes = 0;

      if (leerlingen[index].streepjes >= 3) {
        leerlingen[index].streepjes = 0;
        leerlingen[index].minpunten++;
      }

      renderTabel();
    }

    function voegLeerlingToe() {
      const naam = document.getElementById("nieuweLeerling").value.trim();
      if (!naam) return alert("Geef een naam in!");

      leerlingen.push({ naam: naam, streepjes: 0, minpunten: 0 });
      document.getElementById("nieuweLeerling").value = "";
      renderTabel();
    }

    function verwijderLeerling(index) {
      if (confirm(`Weet je zeker dat je ${leerlingen[index].naam} wil verwijderen?`)) {
        leerlingen.splice(index, 1);
        renderTabel();
      }
    }