import Player from './player.js';

class Computer extends Player {
    constructor() {
        super();
        this.playerField = this.randomPlaceShip();
        this.playerName = 'Computer';
        this.availableMoves = Computer.generateAllMoves();
        this.possibleMoves = [];
    }

    refreshComputer() {
        this.refreshState();
        this.playerField = this.randomPlaceShip();
        this.availableMoves = Computer.generateAllMoves();
        this.possibleMoves = [];
    }

    computerField = () => this.playerField;

    static generateAllMoves() {
        const moves = [];
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                moves.push([x, y]);
            }
        }
        return moves;
    }

    getRandomMove() {
        const index = Math.floor(Math.random() * this.availableMoves.length);
        return this.availableMoves.splice(index, 1)[0];
    }

    addAdjacentMoves(xCor, yCor) {
        const neighbors = [
            [xCor + 1, yCor],
            [xCor - 1, yCor],
            [xCor, yCor + 1],
            [xCor, yCor - 1],
        ];

        neighbors.forEach(([x, y]) => {
            if (x >= 0 && x < 10 && y >= 0 && y < 10) {
                const index = this.availableMoves.findIndex(
                    ([ax, ay]) => ax === x && ay === y
                );
                if (index !== -1) {
                    this.possibleMoves.push(this.availableMoves.splice(index, 1)[0]);
                }
            }
        });
    }

    async computerAttack() {
        return new Promise((resolve) => {
            const attemptAttack = () => {
                let move;
                if (this.possibleMoves.length) {
                    move = this.possibleMoves.shift();
                } else {
                    move = this.getRandomMove();
                }

                const [xCor, yCor] = move;
                const attackResult = this.opponentBoard.receiveAttack(xCor, yCor);

                if (attackResult) {
                    if (this.opponentBoard.field[xCor][yCor] === 'hit') {
                        this.addAdjacentMoves(xCor, yCor);
                    }
                    resolve({ xCor, yCor });
                } else {
                    attemptAttack();
                }
            };

            setTimeout(attemptAttack, 500);
        });
    }
}

export default Computer;
