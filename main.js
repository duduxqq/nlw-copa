function createGame(player1, hour, player2) {
  return `
                          <li>
                            <img src="assets/bandeiras/icon=${player1}.svg" alt="">
                            <strong>${hour}</strong>
                            <img src="assets/bandeiras/icon=${player2}.svg" alt="">
                        </li>
  `
}


function createCard(data, dia, games) {
  return `
                  <div class="card">
                    <h2>${data}<span>${dia}</span></h2>
                    <ul> 
                    ${games}
                    </ul>
                </div>
  `
}



document.querySelector("#app").innerHTML = `
        <header>
            <img src="./assets/logo.svg" alt="">
        </header>
        <main id="cards">
              ${createCard(
                "21/11",
                "SEGUNDA",
                createGame("brazil", "08:00", "serbia") +
                  createGame("hungary", "13:00", "argentina") +
                  createGame("colombia", "20:00", "japan")
              )}
              ${createCard(
                "24/11",
                "QUINTA",
                createGame("british columbia", "08:00", "cameroon") +
                  createGame("india", "13:00", "armenia") +
                  createGame("comoros", "20:00", "jordan")
              )}
        </main>
`