class Roster{

    static allRosters = [];

    constructor(roster) {
        this.position = roster.position;
        this.game_id = roster.game_id;
        this.player_id = roster.player_id;
        this.player = roster.player;
        Roster.allRoster.push(this)
    }

    // static renderRosters(){
    //     for( let roster of this.allGames){
    //         roster.renderGame()
    //     }
    // }

    // static fetchRoster(){
    //     fetch(rosterURL)
    //     .then(rsp => rsp.json())
    //     .then(Roster => {
    //         for( let roster of Roster){
    //             let newRoster = new roster(roster)
    //         }
    //         this.renderRoster()
    //     })
    // }

    // renderRoster(){
 
    // }

    static selectPlayer(){
        let selectedPosition = document.getElementById('selected-position')
        // let y = this.parentElement.parentElement.rosters
        // console.log(this.parentElement.parentElement.players)
        // console.log(this.parentElement.parentElement.rosters)
        // console.log (y)
      
        if (selectedPosition){
            selectedPosition.id = null
            this.id = "selected-position"
        }
        else{
        this.id = "selected-position"
        }

    }
    static updateRoster(){
        // console.log(this.parentElement.dataset.id)
        // console.log(this)
        let selectedPosition = document.getElementById('selected-position')
        // console.log(selectedPosition.parentElement.parentElement)
        // console.log(selectedPosition)
        // console.log(selectedPosition.rosterId)
            if  (selectedPosition){
                let id = selectedPosition.rosterId
                if (id){
                    fetch(`${rostersURL}/${id}`,{
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                          },
                          body: JSON.stringify({
                            player_id: this.parentElement.dataset.id,
                            game_id: selectedPosition.parentElement.parentElement.dataset.id,
                            position: selectedPosition.dataset.id
                          }), 
                    })
                }
                else{
                    fetch(`${rostersURL}`,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                          },
                          body: JSON.stringify({
                            id: selectedPosition.rosterId,
                            player_id: this.parentElement.dataset.id,
                            game_id: selectedPosition.parentElement.parentElement.dataset.id,
                            position: selectedPosition.dataset.id
                          }), 
                    })
                    // location.reload()
                }
                selectedPosition.rosterId
            selectedPosition.innerHTML = this.parentElement.value
            }
    }    

}