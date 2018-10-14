class Robot {
    constructor(x, y, direction) { 
        this._positionX = x;
        this._positionY = y;
        this._direction = direction;
    }

    set direction(direction) {
        this._direction = direction;
    }

    set x(positionX) {
        this._positionX = positionX;
    }

    set y(positionY) {
        this._positionY = positionY;
    }

    get direction() {
        return this._direction;
    }

    get y() {
        return this._positionY;
    }

    get x() {
        return this._positionX;
    }
}

module.exports = Robot;