class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.avg = Math.ceil((this.max+this.min)/2)
        return this.avg
    }

    lower() {
        this.max = this.avg
        
    }

    greater() {
        this.min = this.avg

    }
}

module.exports = GuessingGame;


