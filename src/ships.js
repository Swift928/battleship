class Ship {
    constructor(_length) {
        this.id = this.generateRandomId();
        this.length = _length;
        this.sunk = false;
        this.hits = 0;
        this.image = null;
        this.axis = null;
    }

    generateRandomId() {
        const min = 1000; // Minimum ID value
        const max = 9999; // Maximum ID value
        return Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number between min and max
    }

    hit() {
        this.hits += 1;
        this.isSunk();
    }

    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
            return true;
        }
        return false;
    }

    removeTestShot() {
        this.hits -= 1;
    }

    get shipImage() {
        this.image = document.createElement('img');

        if (this.length === 3) {
            this.image.src = '/src/images/length3Ship.svg';
            this.image.classList.add('length3Ship');
        } else if (this.length === 4) {
            this.image.src = '/src/images/length4Ship.png';
            this.image.classList.add('length4Ship');
        } else if (this.length === 5) {
            this.image.src = '/src/images/length5Ship.png';
            this.image.classList.add('length5Ship');
        } else {
            this.image.src = '/src/images/boat.png';
            this.image.classList.add('length2Ship');
        }

        return this.image;
    }

    get shipId() {
        return this.id;
    }

    get shipLength() {
        return this.length;
    }
}

module.exports = {
    Ship,
};
