const URL = "http://localhost:3000"
const playerURL = `${URL}/players`
const gameURL = `${URL}/games`
const players = document.getElementById("players")
const playersForm = document.getElementById("player-form")
const gamesForm = document.getElementById("game-form")
const games = document.getElementById("games")

// form to create new player

playersForm.addEventListener("submit", addPlayer)

function addPlayer(e){
    e.preventDefault()
    let player = {
        attributes: {
            name: e.target[0].value,
            number: e.target[1].value
        }
    }
    displayPlayers(player)
    savePlayer(player.attributes)
}

// display players
function showPlayers(players) {
    for (let i = 0; i < players.length; i++){
        displayPlayers(players[i].data)
    }    
}

function displayPlayers(player){
    // console.log(player)
    let p = document.createElement('p');
    let card = document.createElement('div');
    let deleteButton = document.createElement('button');
    let selectButton = document.createElement('button');
    deleteButton.innerHTML = 'delete'
    selectButton.innerHTML = 'select' 
    p.dataset.id = player.id
    // card.className = "card"
    p.innerHTML = `${player.attributes.number}. ${player.attributes.name}`
    p.className = "input-text"
    deleteButton.addEventListener('click', deletePlayer)
    selectButton.addEventListener('click', selectPlayer)

    card.append(p, selectButton, deleteButton);
    players.append(card);
}

// get players from database
function fetchPlayers() {
    fetch(playerURL)
    .then(rsp => rsp.json())
    .then(obj => showPlayers(obj));  
}

function savePlayer(player){
    let configObj = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: player.name,
            number: player.number
        })
    };
    fetch(playerURL, configObj)
}

function deletePlayer(e) {
    const playerId = e.target.previousElementSibling.dataset.id
        fetch(`${playerURL}/${playerId}`, 
        {method: "DELETE"})
    e.target.parentElement.remove()
}


gamesForm.addEventListener("submit", addGame)

function addGame(e) {
     e.preventDefault()
    let game = {
        attributes: {
            name: e.target[0].value,
        }
    }
    displayGames(game)
    saveGame(game.att)
    // console.log(game)
}

function displayGames(game) {
    let p = document.createElement('p')
    p.innerHTML = game.attributes.name
    let gameDiv = document.createElement('div')
    gameDiv.append(p)
    games.appendChild(gameDiv)

}

function fetchGames() {
    fetch(gameURL)
    .then(rsp => rsp.json())
    .then(obj => showGames(obj));
}

function showGames(games) {
    for (let i = games.length; i > 0; i--){
        displayGames(games[i - 1].data)
        // console.log(games)
    }    
}

function saveGame(game){
    // console.log(game)
    let configObj = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: game.name
        })
    };
    fetch(gameURL, configObj)
}

// function selectPlayer(e) {
//     e.preventDefault()

// }

fetchGames()
fetchPlayers()
