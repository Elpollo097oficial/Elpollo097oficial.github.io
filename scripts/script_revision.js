/**
 * Crea un elemento de tarjeta de revisión con estado dinámico.
 * @param {object} reviewData - Los datos de la revisión.
 * @param {string} reviewData.ideaDescription - La descripción de la idea.
 * @param {'accepted' | 'denied'} reviewData.status - El estado de la revisión.
 * @param {string} reviewData.comment - El comentario del revisor.
 * @param {string} reviewData.userName - El nombre del usuario.
 * @returns {HTMLElement} El elemento div de la tarjeta.
 */
function createReviewCard(reviewData) {
    // 1. Crear el contenedor principal de la tarjeta con la clase de estado
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Asigna la clase CSS correcta basada en el estado
    if (reviewData.status === 'accepted') {
        card.classList.add('status-accepted');
    } else if (reviewData.status === 'denied') {
        card.classList.add('status-denied');
    }
    
    // 2. Construir el HTML interno usando template literals
    card.innerHTML = `
        <div class="campo main-title">
            <span>${reviewData.ideaDescription}</span>
        </div>
        
        <div class="campo status-info">
            <span class="label">Estado:</span>
            <!-- Usa el nombre completo del estado para mejor accesibilidad -->
            <span class="status-text">${reviewData.status === 'accepted' ? 'Aceptada' : 'Denegada'}</span>
        </div>

        <div class="campo user-info">
            <!-- Asume que tienes las rutas correctas a tus imágenes -->
            <img src="source/anonimo.png" alt="Usuario Anónimo" class="icon">
            <span class="label">Nombre:</span>
            <span>${reviewData.userName}</span>
        </div>

        <div class="campo full-width">
            <span class="label">Descripcion de la Idea:</span>
            <p>${reviewData.comment}</p>
        </div>
    `;

    return card;
}

// Datos de ejemplo que podrías obtener de una API o una lista/
const mockData = [
    {
        ideaDescription: "Prueba Aceptada",
        status: "accepted",
        comment: "Aprovada",
        userName: "Anonimo"
    },
    {
        ideaDescription: "Prueba Denegada",
        status: "denied",
        comment: "Denegada",
        userName: "Elpollo097"
    }
];

// Función para renderizar todas las tarjetas en el contenedor principal
function renderCards() {
    const container = document.querySelector('.Forms_contendor');
    if (container) {
        // Limpia el contenedor antes de añadir nuevas tarjetas (opcional)
        container.innerHTML = ''; 

        mockData.forEach(data => {
            const cardElement = createReviewCard(data);
            container.appendChild(cardElement);
        });
    }
}

// Llama a la función de renderizado cuando la página carga
document.addEventListener('DOMContentLoaded', (event) => {
    renderCards();
});
