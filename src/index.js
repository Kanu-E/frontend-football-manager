const URL = "http://localhost:3000"
const playerURL = `${URL}/players`
const gameURL = `${URL}/games`
// const players = document.getElementById("players")
const playersForm = document.getElementById("player-form")
const gamesForm = document.getElementById("game-form")
// const games = document.getElementById("games")
// form to create new player

playersForm.addEventListener("submit", Player.submitPlayer)
gamesForm.addEventListener("submit", Game.submitGame)


Player.fetchPlayers()
Game.fetchGames()

// console.log(Player.allPlayers)

// function addPlayer(e){
//     e.preventDefault()
//     let player = {
//             name: e.target[0].value,
//             number: e.target[1].value   
//     }
//     displayPlayers(player)
//     savePlayer(player)
//     playersForm.reset()
// }

// // display players
// function showPlayers(players) {
//     for (let i = 0; i < players.length; i++){
//         displayPlayers(players[i])
//     }    
// }

// function displayPlayers(player){
//     // console.log(player)
//     let p = document.createElement('p');
//     let card = document.createElement('div');
//     let deleteButton = document.createElement('button');
//     deleteButton.innerHTML = 'delete'
//     p.dataset.id = player.id
//     card.className = "card"
//     p.innerHTML = `${player.number}. ${player.name}`
//     p.className = "input-text"
//     deleteButton.addEventListener('click', deletePlayer)

//     card.append(p, deleteButton);
//     players.append(card);
// }

// // get players from database



// function fetchPlayers() {
//     fetch(playerURL)
//     .then(rsp => rsp.json())
//     .then(obj => showPlayers(obj));  
// }

// function savePlayer(player){
//     let configObj = {
//         method: "POST",
//         headers: {
//             "content-type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name: player.name,
//             number: player.number
//         })
//     };
//     fetch(playerURL, configObj)
// }

// function deletePlayer(e) {
//     const playerId = e.target.previousElementSibling.dataset.id
//         fetch(`${playerURL}/${playerId}`, 
//         {method: "DELETE"})
//     e.target.parentElement.remove()
// }


// gamesForm.addEventListener("submit", addGame)

// function addGame(e) {
//      e.preventDefault()
//     let game = {
//             name: e.target[0].value,  
//     }
//     displayGames(game)
//     saveGame(game)
//     gamesForm.reset()
//     // console.log(game)
// }

// function displayGames(game) {
//     const h2 = document.createElement('h2');
//     const gameDiv = document.createElement('div')
//     const starters = document.createElement('div')
//     const subs = document.createElement('div')
//     const startersH4 = document.createElement('h4')
//     const subsH4 = document.createElement('h4')
//     const startersul = document.createElement('ul')
//     const subsUL = document.createElement('ul')
//     starters.append(startersH4)
//     for (let i = 0; i < 11;  i++) {
//         //  playerSelect.addEventListener('mouseover', showPlayerToSelect)
//         //  playerSelect.addEventListener('mouseOut', stopShowPlayerToSelect)
//         fetch(playerURL).then(rsp => rsp.json()).then (players => {
//             for (let player of players) {
//                 starters.append(player.name)
//             }
//         })
//         playerSelect = document.createElement('div')
//         playerSelect.className = `player${i+1}`
//         playerSelect.innerHTML = `Select Player ${i + 1}`
//          const ul = document.createElement('ul')
//          startersul.append(playerSelect)
//          starters.append (startersul)
//     }
//     // console.log(playerSelect)
//     h2.innerHTML = game.name
//     startersH4.innerHTML = 'Starters'
//     subsH4.innerHTML = 'Substitutes'
//     subs.append(subsH4)
//     gameDiv.append(h2, starters, subs)
//     games.appendChild(gameDiv)

// }

// function fetchGames() {
//     fetch(gameURL)
//     .then(rsp => rsp.json())
//     .then(obj => showGames(obj));
// }

// function showGames(games) {
//     for (let i = games.length; i > 0; i--){
//         displayGames(games[i - 1])
//         // console.log(games)
//     }    
// }

// function saveGame(game){
//     // console.log(game)
//     let configObj = {
//         method: "POST",
//         headers: {
//             "content-type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name: game.name
//         })
//     };
//     fetch(gameURL, configObj)
// }

// function choosePlayer(){
// }

// function playerSelection(players){
//     players.ForEach(player => displayPlayerSelection(player))
//     for (let i = 0; i < players.length; i++){
//         displayPlayerSelection(players[i])
//     }
//     console.log(playerSelect)
// }

// function displayPlayerSelection(player){
//     const x = document.createElement('div')
//     x.innerHTML = player.name
//     x.className = "player-select"
//     playerSelect.append(x)
// }

// function showPlayerToSelect(e){
// // console.log(e.target.childNodes[1])

//     let players = e.target.childNodes[1]
 
//         players.style.display = "block";

// }

function stopShowPlayerToSelect(e){
   console.log(e.target)
    // players.style.display = "none"
}
// fetchGames()
// fetchPlayers()

// choosePlayer()


function choosePlayer(e){
    let selectedPosition = document.getElementById('selected-position')
    if (selectedPosition){
        selectedPosition.id = null
    }
  
    e.target.id = "selected-position"
    
}

function selectThis(e){
    let selectedPosition = document.getElementById('selected-position')
    selectedPosition.innerHTML = e.target.previousElementSibling.value
    // selectedPosition.innerHTML = e.target.value
}

