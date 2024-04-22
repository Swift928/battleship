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
        if (this.length === 3) {
            this.image = document.createElement('span');
            this.image.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 183.27"><path d="M3.94 99.58c61.77 6.59 104.79 11.27 161.95 14.65l14.89-69.53c5.51 0 11.1-.04 16.75-.09V0h18.21v44.38l12.62-.19V18.71h18.21v25.25c20.32-.2 40.52-.16 59.57.76 11.93.99 22.31 4.87 30.64 12.57 8.15 7.54 14.07 18.59 17.21 33.98l.11.55.02.59.61 29.19c22.02.51 29.63.95 52.62 1.34l100.71 1.74c2.04.03 4.75 1.99 3.71 3.71l-31.01 51.17c-1.03 1.7-1.71 3.71-3.71 3.71H50.06c-2.32 0-44.96-71.58-49.83-79.97-.81-1.39.57-4.05 3.71-3.72zm106.35-43.25h-10.21L98.7 44.24c-.13-1.05-.89-1.92-1.93-1.92h-24.7c-1.04 0-1.8.87-1.92 1.92l-1.39 12.09h-9.23c-1.46 0-2.3 1.28-2.69 2.68l-.86 3.11-44.72-7.37-1.53 7.66L52.7 74.03l-6.66 24.35c26.95 2.57 53.25 4.78 79.21 6.7l-12.28-46.07c-.37-1.42-1.25-2.68-2.68-2.68zm293.72 27.61h10.2l1.39-12.09c.12-1.05.87-1.92 1.92-1.92h24.7c1.06 0 1.81.87 1.93 1.92l1.39 12.09h9.23c1.48 0 2.3 1.28 2.68 2.68l.86 3.11 37.65-5.46 1.53 7.66-35.9 9.71 4.62 16.85-58.86-1.01-14.18-.25 8.15-30.61c.38-1.42 1.21-2.68 2.69-2.68zM278.44 67.81h54.22c4.87 7.34 8.34 14.84 9.38 22.53h-63.6V67.81zm-36.92-.01h23.33v23.08h-23.33V67.8z"/></svg>`;
            this.image.classList.add('length3Ship');
        } else if (this.length === 4) {
            this.image = document.createElement('img');
            this.image.src = '/src/images/length4Ship.png';
            this.image.classList.add('length4Ship');
        } else if (this.length === 5) {
            this.image = document.createElement('img');
            this.image.src = '/src/images/length5Ship.png';
            this.image.classList.add('length5Ship');
        } else {
            this.image = document.createElement('img');
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
