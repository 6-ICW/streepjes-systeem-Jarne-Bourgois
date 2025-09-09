
 let leerlingen = JSON.parse(localStorage.getItem("leerlingen")) || [
      { naam: "Jarne", streepjes: 0, minpunten: 0 },
      { naam: "Xen", streepjes: 0, minpunten: 0 },
      { naam: "Xander", streepjes: 0, minpunten: 0 }
    ];

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
            </td>
          </tr>
        `;
      });
      localStorage.setItem("leerlingen", JSON.stringify(leerlingen));
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

    window.onload = renderTabel;