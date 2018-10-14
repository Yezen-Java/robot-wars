const BattleArena = require('./battleArena');
const MovementLogic = require('./robotMovingLogic');

class BattleArenaFacotry {

    getBattleArena(arenaSize){
        return new BattleArena(new MovementLogic, arenaSize );
    }
}

// singleton
module.exports = new BattleArenaFacotry();