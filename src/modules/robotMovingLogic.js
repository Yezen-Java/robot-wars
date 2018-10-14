class RobotMovingLogic {

    constructor() {
        this.directionsArray = ['N', 'E', 'S', 'W'] // pretend to be a circular array by using modual operator!
    }

    //Todo: to make the robotMovingLogic more dynamic of current arena instance Size chnages.
    set arenaSize(arenaSize) {
        this._arenaSize = arenaSize;
    }

    moveRobot(arenaSize, robot, move) {
        if (move == 'L' || move == 'R') {
            const newDirection = this.getNewDireciton(this.directionsArray, robot.direction, move);
            robot.direction = newDirection;
        } else if (move == 'M') {
            const newPositions = this.moveRobotPoition(arenaSize, robot.x, robot.y, robot.direction);
            robot.x = newPositions.x;
            robot.y = newPositions.y;
        }
    }

    moveRobotPoition(arenaSize, x, y, direction) {
        let _x = x;
        let _y = y;

        //todo check arena size and check if its a vaild move!
        switch (direction) {
            case 'N':
                _y++;
                break;
            case 'E':
                _x++;
                break;
            case 'W':
                _x--;
                break;
            case 'S':
                _y--;
                break;
            default:
                break;
        }

        return {
            x: _x, y: _y
        }
    }

    getNewDireciton(directionsArray, currentBotDireciton, spinMove) {
        let newDirection;
        const currentDirIndex = directionsArray.indexOf(currentBotDireciton);

        if (spinMove == 'L') {
            let newIndex = this.mod((currentDirIndex - 1), this.directionsArray.length);
            newDirection = this.directionsArray[newIndex];
        } else if (spinMove == 'R') {
            let newIndex = this.mod((currentDirIndex + 1), this.directionsArray.length);
            newDirection = this.directionsArray[newIndex];
        }
        return newDirection;
    }

    // to overcome the the issue when negative position is calculated 
    mod(n, m) {
        var remain = n % m;
        return Math.floor(remain >= 0 ? remain : remain + m);
    };
}

module.exports = RobotMovingLogic;
