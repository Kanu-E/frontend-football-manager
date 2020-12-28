class Game {
    static allGames = []  
    constructor(game){
        this.name = game.name
        this.players = game.players
        this.rosters = game.rosters
        this.id = game.id
        // this.player1 = game.player_1
        // this.player2 = game.player_2
        // this.player3 = game.player_3
        // this.player4 = game.player_4
        // this.player5 = game.player_5
        // this.player6 = game.player_6
        // this.player7 = game.player_7
        // this.player8 = game.player_8
        // this.player9 = game.player_9
        // this.player10 = game.player_10
        // this.player11 = game.player_11
        Game.allGames.push(this)
    }
    static renderGames(){
        for( let game of this.allGames){
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
        team.append(teamH4)
        // console.log(gameDiv.id)
                // const player1 = document.createElement('div')
                // // player1.addEventListener('click', this.choosePlayer)
                // player1.innerHTML = this.player1
                // const player2 = document.createElement('div')
                // // player2.addEventListener('click', this.choosePlayer)
                // player2.innerHTML = this.player2
                // const player3 = document.createElement('div')
                // // player3.addEventListener('click', this.choosePlayer)
                // player3.innerHTML = this.player3
                // const player4 = document.createElement('div')
                // // player4.addEventListener('click', this.choosePlayer)
                // player4.innerHTML = this.player4
                // const player5 = document.createElement('div')
                // // player5.addEventListener('click', this.choosePlayer)
                // player5.innerHTML = this.player5
                // const player6 = document.createElement('div')
                // // player6.addEventListener('click', this.choosePlayer)
                // player6.innerHTML = this.player6
                // const player7 = document.createElement('div')
                // // player7.addEventListener('click', this.choosePlayer)
                // player7.innerHTML = this.player7
                // const player8 = document.createElement('div')
                // // player8.addEventListener('click', this.choosePlayer)
                // player8.innerHTML = this.player8
                // const player9 = document.createElement('div')
                // // player9.addEventListener('click', this.choosePlayer)
                // player9.innerHTML = this.player9
                // const player10 = document.createElement('div')
                // // player10.addEventListener('click', this.choosePlayer)
                // player10.innerHTML = this.player10
                // const player11 = document.createElement('div')
                // // player11.addEventListener('click', this.choosePlayer)
                // player11.innerHTML = this.player11
                // team.append (player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11)  
                for (let i = 0; i < 11; i++){
                    const playerSelect = document.createElement('div')
                    // for(let j = 0; j < gameDiv.rosters.length; j++){
                    //     console.log( gameDiv.rosters[j].position )
                    // }
                    playerSelect.innerHTML = `select player ${i+1}`
                    playerSelect.dataset.id = i+1
                        let roster = gameDiv.rosters.find (function(s) {return s.position == playerSelect.dataset.id})                     
                        if (roster) {
                            let player = gameDiv.players.find (function(s) {return s.id == roster.player_id})
                            //  console.log(.name)
                            playerSelect.innerHTML = `${player.number}. ${player.name}`
                        }
                   
                    team.appendChild(playerSelect)
                }      
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
        fetch(gamesURL, configObj)
        .then(rsp => rsp.json())
        .then(data => {
            let newGame = new Game(data)
            newGame.renderGame()
        })
    }
    // choosePlayer(){
    //     // let addPlayerButton = document.querySelectorAll(".Add Player")
    //     let selectedPosition = document.getElementById('selected-position')
    //     if (selectedPosition){
    //         selectedPosition.id = null
    //     }
    //     else{
    //         this.id = "selected-position"
    //         this.parentElement.parentElement.id = "selected-position-parent"
    //     }
    //     // addPlayerButton.style.display = "block"
    //     console.log(this.parentElement.parentElement)
    // }÷
    // static updateGame(){
    //     // console.log(this.previousElementSibling.value)
    //     let selectedPosition = document.getElementById('selected-position')
    //     let selectedPosition2Parent = document.getElementById('selected-position-parent')
    //     if  (selectedPosition){
    //         selectedPosition.innerHTML = this.previousElementSibling.value
    //         const players = selectedPosition.parentElement.children 
    //         let id = selectedPosition2Parent.dataset.id
    //         fetch(`${gamesURL}/${id}`,{
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //               },
    //               body: JSON.stringify({
    //                 // player_1: players[1].innerHTML,
    //                 // player_2: players[2].innerHTML,
    //                 // player_3: players[3].innerHTML,
    //                 // player_4: players[4].innerHTML, 
    //                 // player_5: players[5].innerHTML,
    //                 // player_6: players[6].innerHTML,
    //                 // player_7: players[7].innerHTML,
    //                 // player_8: players[8].innerHTML,
    //                 // player_9: players[9].innerHTML,
    //                 // player_10: players[10].innerHTML,
    //                 // player_11: players[11].innerHTML
    //               })
    //         })
    //         // .then(rsp => rsp.json())
    //         console.log(players)
    //         selectedPosition.id = null
    //     }
    // }
}