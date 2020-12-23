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

function choosePlayer(e){
    // let addPlayerButton = document.querySelectorAll(".Add Player")
    let selectedPosition = document.getElementById('selected-position')
    if (selectedPosition){
        selectedPosition.id = null
    }
    e.target.id = "selected-position"  
    // addPlayerButton.style.display = "block"
}
function selectThis(e){
    let selectedPosition = document.getElementById('selected-position')
    selectedPosition.innerHTML = e.target.previousElementSibling.value
}

