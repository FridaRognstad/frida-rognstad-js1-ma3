const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const facts = results.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      console.log(facts[i]);

      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="result"><h2>${facts[i].name}</h2><p>Rating: ${facts[i].rating}</p><p>Tags: ${facts[i].tags.length}</p></div>`;
    }
  } catch (error) {
    console.log("There seems to be an error");
    resultsContainer.innerHTML = displayError("Oh no! Could not call the API");
  }
}

getGames();
