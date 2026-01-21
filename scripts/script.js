function actualizarReloj() {
      const opciones = {
        timeZone: "America/Mexico_City",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      };

      const hora = new Intl.DateTimeFormat("es-MX", opciones).format(new Date());
      document.getElementById("reloj").textContent = hora;
    }

    actualizarReloj();
    setInterval(actualizarReloj, 1000);

function actualizarFecha() {
    const ahora = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Mexico_City" })
    );

    const dia = String(ahora.getDate()).padStart(2, "0");
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const anio = ahora.getFullYear();

document.getElementById("fecha").textContent =
    `${dia}/${mes}/${anio}`;
}

actualizarFecha();

