/**
 * @param {object} Data - Los datos del datapack
 */
function createReviewCard(Data) {
    const card = document.createElement('div');
    card.classList.add('Logics'); 
    
    card.innerHTML = `
        <img src="source/${Data.Imagen}.png" alt="${Data.titulo}" class="logo">
        <h2> ${Data.titulo} </h2>
        <p> ${Data.descripcion} </p>
        <p class="Versiones"> Versiones: ${Data.versiones} </p>
    `;

    return card;
}

// Insertar datos 
const mockData = [
    {
        Imagen: "Logics",
        titulo: "Logics Crafts",
        descripcion: "Logics Crafts is a datapack that adds logic to minecraft crafts.",
        versiones: "1.21.11 - 1.21.8 - 1.21.7"
    },
    {
        Imagen: "Amplified",
        titulo: "Amplified Tnt",
        descripcion: "This datapack adds a new tnt that can increase the explosion level.",
        versiones: "1.21.11 - 1.21.8 - 1.21.3"
    },
    {
        Imagen: "Fryed",
        titulo: "Fryed Eggs",
        descripcion: "Fried eggs is a Datapack that adds different ways to cook eggs and other dishes that are usually eaten for breakfast",
        versiones: "1.21.11 - 1.21.8 - 1.21.3"
    },
    {
        Imagen: "Helmet",
        titulo: "Helmet Bomb",
        descripcion: "Helmet Bomb is a datapack that adds an explosive helmet for both players and mobs.",
        versiones: "1.21.11 - 1.21.8 - 1.21.7"
    },
    {
        Imagen: "Magma",
        titulo: "Magma Infusion",
        descripcion: "This Datapack makes the magma block burn the items it has on top once you throw the item a counter is put on top of the item when it reaches 10 the item disappears in a small explosion that does not hurt you or break anything but destroys the item.",
        versiones: "1.21.11 - 1.21.8 - 1.21.3"
    },
    {
        Imagen: "Simple",
        titulo: "Simple Jetpack",
        descripcion: "This datapack adds a simple jetpack.",
        versiones: "1.21.11 - 1.21.8"
    },
    {
        Imagen: "Remove",
        titulo: "Remove End Crystal And Tnt",
        descripcion: "This datapack adds a number to the items you have on the floor and if you throw an item that cannot be stacked in 64 its name is added.",
        versiones: "1.21.11 - 1.21.8 - 1.21.5"
    },
    {
        Imagen: "Spiders",
        titulo: "Spiders Reality Climbing",
        descripcion: "This Datapack modifies spiders to have a size similar to real life but so little so exaggerated to be able to kill them facially.",
        versiones: "1.21.11 - 1.21.8 - 1.21.5"
    }
];

function renderCards() {
    const container = document.querySelector('.Contenido-bar');
    
    if (container) {
        container.innerHTML = '';

        mockData.forEach(item => {
            const cardElement = createReviewCard(item);
            container.appendChild(cardElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', renderCards);
