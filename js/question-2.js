const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".games");

async function getGames() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const facts = results.results;

    gamesContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      if (i === 8) {
        break;
      }

      gamesContainer.innerHTML += `<div class="game"><h2>${facts[i].name}</h2><p>Rating: ${facts[i].rating}</p><p>Tags: ${facts[i].tags.length}</p></div>`;
    }
  } catch (error) {
    console.log("There seems to be an error");
    gamesContainer.innerHTML = displayError("Oh no! Could not call the API");
  }
}

getGames();
