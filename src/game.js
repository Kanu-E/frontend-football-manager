class Game {
    static allGames = []  
    constructor(game){
        this.name = game.name
        this.players = game.players
        this.id = game.id
        this.player1 = game.player_1
        this.player2 = game.player_2
        this.player3 = game.player_3
        this.player4 = game.player_4
        this.player5 = game.player_5
        this.player6 = game.player_6
        this.player7 = game.player_7
        this.player8 = game.player_8
        this.player9 = game.player_9
        this.player10 = game.player_10
        this.player11 = game.player_11
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
                const player1 = document.createElement('div')
                player1.addEventListener('click', choosePlayer)
                player1.innerHTML = this.player1
                const player2 = document.createElement('div')
                player2.addEventListener('click', choosePlayer)
                player2.innerHTML = this.player2
                const player3 = document.createElement('div')
                player3.addEventListener('click', choosePlayer)
                player3.innerHTML = this.player3
                const player4 = document.createElement('div')
                player4.addEventListener('click', choosePlayer)
                player4.innerHTML = this.player4
                const player5 = document.createElement('div')
                player5.addEventListener('click', choosePlayer)
                player5.innerHTML = this.player5
                const player6 = document.createElement('div')
                player6.addEventListener('click', choosePlayer)
                player6.innerHTML = this.player6
                const player7 = document.createElement('div')
                player7.addEventListener('click', choosePlayer)
                player7.innerHTML = this.player7
                const player8 = document.createElement('div')
                player8.addEventListener('click', choosePlayer)
                player8.innerHTML = this.player8
                const player9 = document.createElement('div')
                player9.addEventListener('click', choosePlayer)
                player9.innerHTML = this.player9
                const player10 = document.createElement('div')
                player10.addEventListener('click', choosePlayer)
                player10.innerHTML = this.player10
                const player11 = document.createElement('div')
                player11.addEventListener('click', choosePlayer)
                player11.innerHTML = this.player11
                team.append (player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11)        
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
}