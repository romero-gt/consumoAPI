const list = document.getElementById('list');

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(data => {
        const pokemons = data.results;
        pokemons.forEach(pokemon => {
            fetch(pokemon.url)
                .then(res => res.json())
                .then(pokemon => {
                    createPokemonCard(pokemon);
                })
        })
    })
    .catch(e => {
        console.error("Erro ao carregar dados: ", e)
    });

function createPokemonCard(pokemon) {
    const card = document.createElement("div");
    card.className = "card text-center md-4 mx-auto";
    card.style = "12rem";

    card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" class="card-img-top img-fluid mt-2 w-50 mx-auto" alt="${pokemon.name}">
        <div class="card-body">
          <h5 class="card-title text-capitalize">${pokemon.name}</h5>
          <p class="card-text">
            <strong>ID:</strong> ${pokemon.id} <br>
            <strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(", ")}
          </p>
        </div>
      `;
    list.appendChild(card);
}