class Ship {
    constructor(length) {
        this.length = length;
        this.sunk = false;
        this.hits = 0;
    }

    hit() {
        this.hits += 1;
        this.isSunk();
    }

    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
            return `Ship is Sunk`;
        }
        return `Ship Not Sunk`;
    }
}

module.exports = {
    Ship,
};
