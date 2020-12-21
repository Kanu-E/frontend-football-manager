class Game {
    static allGames = []
   
    constructor(game){
        this.name = game.name
        this.players = game.players
        Game.allGames.push(this)
    }

    static renderGames(){
        for( let game of this.allGames){
            game.renderGame()
        }
    }

    static fetchGames(){
        fetch(gameURL)
        .then(rsp => rsp.json())
        .then(games => {
            for( let game of games){
                let newGame = new Game(game)
            }
            this.renderGames()
        })
    }
    renderGame(){
        const h2 = document.createElement('h2');
        const gameDiv = document.createElement('div')
        const team = document.createElement('div')
        const teamH4 = document.createElement('h4')
        team.append(teamH4)
            for (let i = 0; i < 11;  i++) {
                const playerSelect = document.createElement('div')
                playerSelect.addEventListener('click', choosePlayer)
                // playerSelect.addEventListener('mouseOut', stopShowPlayerToSelect) 
                // playerSelect.id = 'player'
                playerSelect.innerHTML = `Select Player ${i + 1}`
                let playerChoices = document.createElement('div')
                // for (let player of Player.allPlayers){
                //     let playerChoice = document.createElement('p')
                //     playerChoice.value = player
                //     playerChoice.innerText = player.name
                //     playerChoices.appendChild(playerChoice)
                //     playerChoices.className = 'player-choice'
                // }
                // playerSelect.appendChild(playerChoices)
                team.append (playerSelect)
            }
            // console.log(playerSelect)
        h2.innerHTML = this.name
        teamH4.innerHTML = 'Team'
        gameDiv.append(h2, team)
        games.appendChild(gameDiv)
        }
    static submitGame(){
        event.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                    name: event.target[0].value,
            })
        };
        fetch(gameURL, configObj)
        .then(rsp => rsp.json())
        .then(data => {
            let newGame = new Game(data)
            newGame.renderGame()
        })

    }

    deletePlayer(){
       console.log(this.previousElementSibling.dataset.id)
    }


}