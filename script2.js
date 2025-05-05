const apiURL = 'https://pokeapi.co/api/v2/pokemon/';

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

