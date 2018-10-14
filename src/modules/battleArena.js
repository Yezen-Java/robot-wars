class BattleArea {

    constructor(movementLogic, areaSize) {
        this.gameLogic = movementLogic;
        this.areaSize = areaSize;
        this.callbackArray = [];
        this.robotsArray = [];
    }

    setRobot(robot) {
        this.robotsArray.push(robot);
    }

    moveRobot(movements, robotNum) {
        if (movements.length <= 0 || this.robotsArray[robotNum] == undefined) return;

        movements.forEach(move => {
            this.gameLogic.moveRobot(this.areaSize, this.robotsArray[robotNum], move);
        });
    }

    /**
    TODO: add events for listening, when the battle arena executes one 
    or more robots at the same time or notify client with errors
    */
    subscribeForEvents(callback) {
        this.callbackArray.push(callback);
    }

    get robots() {
        return this.robotsArray;
    }

}

module.exports = BattleArea;