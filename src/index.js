const URL = "http://localhost:3000"
const playerURL = `${URL}/players`
const gamesURL = `${URL}/games`
const rostersURL = `${URL}/rosters`
// const players = document.getElementById("players")
const playersForm = document.getElementById("player-form")
const gamesForm = document.getElementById("game-form")
// const games = document.getElementById("games")
// form to create new player
// playersForm.style.display = "none"

playersForm.addEventListener("submit", Player.submitPlayer)
gamesForm.addEventListener("submit", Game.submitGame)


Player.fetchPlayers()
Game.fetchGames()

// function selectThis(e){
 
//     Game.updateGame
// }

