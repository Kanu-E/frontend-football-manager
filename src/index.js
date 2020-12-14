const URL = "http://localhost:3000"
const playerURL = `${URL}/players`

const players = document.getElementById("players")
const playersForm = document.getElementById("player-form")

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
    // let li = document.createElement('li');
    let p = document.createElement('p');
    let card = document.createElement('div');
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'delete'
    p.dataset.id = player.id
    // card.className = "card"
    // li.innerHTML = `${player.name}, ${player.number}`
    p.innerHTML = `${player.attributes.number}. ${player.attributes.name}`
    p.className = "input-text"
    deleteButton.addEventListener('click', deletePlayer)
    card.append(p, deleteButton);
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
    


fetchPlayers()
