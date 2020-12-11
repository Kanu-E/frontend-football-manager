const players = document.getElementById("players")
const playersForm = document.getElementById("player-form")


const played = [{name: "Ronaldo", number: 10}, {name:"Messi", number: 10}]

function showPlayers(player) {
    for (let i = 0; i < player.length; i++){
        displayPlayers(player[i])
    }
    
}

function displayPlayers(player){
    let li = document.createElement('li'); 
    li.innerHTML = `${player.name}, ${player.number}`
    players.appendChild(li)
}

playersForm.addEventListener("submit", addPlayer)

function addPlayer(e){
    e.preventDefault()
    let player = {}
    player.name = e.target[0].value
    player.number = e.target[1].value
    displayPlayers(player)
}


showPlayers(played)