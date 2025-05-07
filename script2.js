const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
let currentId = 1;

const renderDetails = (details) => {
    const container = document.getElementById('container');
    container.innerHTML = `
        <div class="card">
            <img src="${details.sprites.front_default}" class="img-fluid w-50 mx-auto d-block"/>
            <h2 class="text-center">${details.name}</h2>
            <p class="text-center">#${details.id}</p>
        </div>
    `;
}

const loadPokemon = async (nextId) => {
    const response = await fetch(apiURL + nextId);
    const data = await response.json();
    currentId = data.id;
    renderDetails(data);
}

const loadActionEvent = () => {
    const previusButton = document.getElementById('previus');
    const nextButton = document.getElementById('next');

    nextButton.addEventListener('click', () => {
        loadPokemon(currentId + 1);
    });
    previusButton.addEventListener('click', () => {
        loadPokemon(currentId - 1);
    });
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const input = document.getElementById('search-input').value;
        loadPokemon(input);
        searchForm.reset();
    })
}
loadPokemon(currentId);
loadActionEvent();