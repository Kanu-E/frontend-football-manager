class Game {
    static allGames = []  
    constructor(game){
        this.name = game.name
        this.players = game.players
        this.rosters = game.rosters
        this.id = game.id
        Game.allGames.push(this)
    }
    static renderGames(){
        for( let game of this.allGames.reverse()){
            game.renderGame()
        }
    }
    static fetchGames(){
        fetch(gamesURL)
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
        gameDiv.dataset.id = this.id
        gameDiv.players = this.players
        gameDiv.rosters = this.rosters
        const team = document.createElement('div')
        const teamH4 = document.createElement('h4') 
        gameDiv.append(h2, teamH4) 
                for (let i = 0; i < 11; i++){
                    const playerSelect = document.createElement('div')
                    playerSelect.innerHTML = `select player ${i+1}`
                    playerSelect.dataset.id = i+1
                        let roster = gameDiv.rosters.find (function(s) {return s.position == playerSelect.dataset.id})                     
                        if (roster) {
                            let player = gameDiv.players.find (function(s) {return s.id == roster.player_id})
                            //  console.log(roster.id)
                            playerSelect.innerHTML = `${player.number}. ${player.name}`
                            playerSelect.rosterId = roster.id
                            // console.log(playerSelect.rosterId) 
                        }
                    playerSelect.addEventListener('click', Roster.selectPlayer)
                    playerSelect.className = "player-select"
                    gameDiv.append(playerSelect)
                    gameDiv.className = 'game-card'
                }  
                const pitch = document.createElement('section') 
                const field = document.createElement('section') 
                const centerLine = document.createElement('section') 
                centerLine.className = 'center-line'
                const centerCircle = document.createElement('section') 
                centerCircle.className = 'center-circle'
                const penaltyBoxLeft = document.createElement('section') 
                penaltyBoxLeft.className = 'penalty-box-left'
                const penaltyBoxRight = document.createElement('section') 
                penaltyBoxRight.className = 'penalty-box-right'
                field.append(centerLine, centerCircle, penaltyBoxLeft, penaltyBoxRight)         
        const section = document.createElement('section')
        section.className = "game-section"
        h2.innerHTML = this.name
        teamH4.innerHTML = 'Team'
        pitch.className = 'pitch'
        field.className = "field"

        pitch.appendChild(field)
        section.append(gameDiv, pitch)
        games.appendChild(section)
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
        fetch(gamesURL, configObj)
        .then(rsp => rsp.json())
        .then(data => {
            let newGame = new Game(data)
            newGame.renderGame()
        })
    }
}