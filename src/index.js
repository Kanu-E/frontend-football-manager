const players = document.getElementById("players")

const played = ["Ronaldo", "Messi"]

function showPlayers(player) {
    for (let i = 0; i < player.length; i++){
        displayPlayers(player[i])
    }
    
}

function displayPlayers(player){
    let li = document.createElement('li'); 
    li.innerHTML = player
    players.appendChild(li)
}



showPlayers(played)