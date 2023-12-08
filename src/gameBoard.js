const { Ship } = require('./ships');

class GameBoard {
    constructor() {
        this.field = this.board();
    }

    board() {
        const game = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                row.push([i, j]);
            }
            game.push(row);
        }
        return game;
    }

    placeShip(xCor, yCor, ship) {
        if (!this.isSpaceAvailable(xCor, yCor, ship)) return false;

        let y = yCor;
        let { length } = ship;
        if (y + length > 10) return false;

        while (length) {
            this.field[xCor][y] = ship;
            y++;
            length--;
        }
        return this.field;
    }

    isSpaceAvailable(xCor, yCor, ship) {
        let y = yCor;
        let { length } = ship;
        if (y + length > 10) return false;

        while (length) {
            if (this.field[xCor][y] instanceof Ship) return false;
            if (!this.field[xCor][y]) return false;
            y++;
            length--;
        }
        return true;
    }

    receiveAttack(xCor, yCor) {
        if (!(this.field[xCor][yCor] instanceof Ship)) {
            this.field[xCor][yCor] = 'missed';
            return this.field;
        }
        if (this.field[xCor][yCor] instanceof Ship) {
            const ship = this.field[xCor][yCor];
            ship.hit();
            return this.field;
        }
        return -1;
    }
}

const testShip = new Ship(6);
const first = new GameBoard();
const tester = new Ship(3);

console.log(first.placeShip(4, 4, testShip));
// console.log(first.receiveAttack(4, 3));

console.log(first.placeShip(5, 5, tester));

module.exports = {
    GameBoard,
};
