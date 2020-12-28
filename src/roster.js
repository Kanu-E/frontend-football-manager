class Roster{

    static allRosters = [];

    constructor(roster) {
        this.position = roster.position;
        this.game_id = roster.game_id;
        this.player_id = roster.player_id;
        this.player = roster.player;
        Roster.allRoster.push(this)
    }

    static renderRosters(){
        for( let roster of this.allGames){
            roster.renderGame()
        }
    }

    static fetchRoster(){
        fetch(rosterURL)
        .then(rsp => rsp.json())
        .then(Roster => {
            for( let roster of Roster){
                let newRoster = new roster(roster)
            }
            this.renderRoster()
        })
    }

    renderRoster(){
 
    }


}