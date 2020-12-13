const URL = "http://localhost:3000"
const PLAYERURL = `${URL}/players`

const players = document.getElementById("players")
const playersForm = document.getElementById("player-form")

// display players
function showPlayers(player) {
    for (let i = 0; i < player.length; i++){
        displayPlayers(player[i])
    }
    
}

function displayPlayers(player){
    // let li = document.createElement('li');
    let p = document.createElement('p');
    let card = document.createElement('div') 
    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'delete'
    // card.className = "card"
    // li.innerHTML = `${player.name}, ${player.number}`
    p.innerHTML = `${player.number}. ${player.name} `
    p.className = "input-text"
    // deleteButton.addEventListener('click')
    card.append(p, deleteButton)
    players.append(card)
}

// get players from database
fetch(PLAYERURL)
    .then(function (rsp) {
        return rsp.json()
    })
    .then(function(obj){
       showPlayers(obj)
})

playersForm.addEventListener("submit", addPlayer)

function addPlayer(e){
    e.preventDefault()
    let player = {}
    player.name = e.target[0].value
    player.number = e.target[1].value
    displayPlayers(player)
    savePlayer(player)
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
    fetch(PLAYERURL, configObj)
}


 

// showPlayers(played)


