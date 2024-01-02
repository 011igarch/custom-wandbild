document.addEventListener("DOMContentLoaded", function () {
  // Warten Sie, bis die DOM-Struktur vollständig geladen ist

  // Laden Sie die details.json-Datei asynchron
  fetch("details.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP-Fehler! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Verarbeiten Sie die JSON-Daten hier
      console.log(data);

      // Beispiel: Fügen Sie Optionen für Layouts, Farben, Rahmen, Bautiefen und Größen hinzu
      const layoutsSelect = document.querySelector("#layouts");
      data.layouts.forEach((layout) => {
        const option = document.createElement("option");
        option.value = layout.id;
        option.text = layout.name;
        layoutsSelect.appendChild(option);
      });

      const colorsRadioGroup = document.querySelector("#colors");
      data.colors.forEach((color) => {
        const label = document.createElement("label");
        label.innerHTML = `
          <input type="radio" name="farbe" value="${color.id}">
          <span>${color.name}</span>
        `;
        colorsRadioGroup.appendChild(label);
      });

      // Fügen Sie ähnliche Logik für Rahmen, Bautiefen und Größen hinzu...
    })
    .catch((error) => {
      console.error("Fehler beim Laden der JSON-Datei:", error);
    });
});


// Beispiel für dynamische Generierung von Layout-Optionen
      function rotateLayout() {
        const layoutList = document.getElementById("layoutList");
        const layouts = ["Layout 1", "Layout 2", "Layout 3"];

        // Entfernen Sie vorhandene Optionen
        layoutList.innerHTML = "";

        // Fügen Sie die neuen Optionen ein
        layouts.forEach(layout => {
          const button = document.createElement("button");
          button.textContent = layout;
          layoutList.appendChild(button);
        });
      }

      // Hier können Sie ähnliche Funktionen für andere Optionen hinzufügen

      // Beispiel für dynamische Generierung von Rahmen-Optionen
      function populateRahmenOptions() {
        const rahmenList = document.getElementById("rahmenList");
        const rahmenOptions = ["+ Infinity Frame", "+ Lightbox", "+ Print Only"];

        rahmenList.innerHTML = "";

        rahmenOptions.forEach(rahmen => {
          const button = document.createElement("button");
          button.textContent = rahmen;
          rahmenList.appendChild(button);
        });
      }

      // Beispiel für dynamische Generierung von Bautiefe-Optionen
      function populateBautiefeOptions() {
        const bautiefeList = document.getElementById("bautiefeList");
        const bautiefeOptions = ["5cm", "10cm"];

        bautiefeList.innerHTML = "";

        bautiefeOptions.forEach(bautiefe => {
          const button = document.createElement("button");
          button.textContent = bautiefe;
          bautiefeList.appendChild(button);
        });
      }

      // Beispiel für dynamische Generierung von Größen-Optionen
      function populateGroesseOptions() {
        const groesseList = document.getElementById("groesseList");
        const groesseOptions = ["24x24", "30x30", "40x40", "50x50"];

        groesseList.innerHTML = "";

        groesseOptions.forEach(groesse => {
          const button = document.createElement("button");
          button.textContent = groesse;
          groesseList.appendChild(button);
        });
      }

      // Funktionen für die Initiierung der dynamischen Inhalte
      window.onload = function() {
        rotateLayout();
        populateRahmenOptions();
        populateBautiefeOptions();
        populateGroesseOptions();
      };

      document.addEventListener("DOMContentLoaded", function () {
        // Warten Sie, bis die DOM-Struktur vollständig geladen ist

        // Hinzufügen eines Event Listeners zum Rotate-Button
        const rotateButton = document.querySelector("#rotateButton");
        rotateButton.addEventListener("click", rotateSwatches);
      });

      function rotateSwatches() {
        // Holen Sie sich alle Swatches-Elemente
        const swatches = document.querySelectorAll(".swatches");

        // Iterieren Sie über jedes Swatch und wenden Sie die Rotation an
        swatches.forEach((swatch) => {
          // Holen Sie sich den aktuellen Rotationswert (oder setzen Sie ihn auf 0, wenn er nicht vorhanden ist)
          const currentRotation = swatch.dataset.rotation || 0;

          // Berechnen Sie den neuen Rotationswert (um 90 Grad erhöhen)
          const newRotation = (parseInt(currentRotation) + 90) % 360;

          // Setzen Sie den Rotationswert im Dataset, um ihn für spätere Rotationen zu speichern
          swatch.dataset.rotation = newRotation;

          // Wenden Sie die CSS-Transformation an, um das Swatch zu drehen
          swatch.style.transform = `rotate(${newRotation}deg)`;
        });
      }

      document.addEventListener("DOMContentLoaded", function () {
        // Warten Sie, bis die DOM-Struktur vollständig geladen ist

        // Fügen Sie einen Event Listener zu allen SVG-Swatch-Elementen hinzu
        const swatches = document.querySelectorAll(".swatches");
        swatches.forEach((swatch) => {
          swatch.addEventListener("click", function () {
            // Rufen Sie die Funktion zum Aktualisieren des Upload-Containers auf und übergeben Sie das SVG
            updateUploadContainer(this.innerHTML);
          });
        });
      });

      function updateUploadContainer(svgCode) {
        // Holen Sie sich das Upload-Container-Element
        const uploadContainer = document.querySelector(".upload");

        // Setzen Sie den inneren HTML-Inhalt des Upload-Containers auf das ausgewählte SVG
        uploadContainer.innerHTML = svgCode;
      }