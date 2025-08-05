import Player from './player.js';

class Computer extends Player {
    constructor() {
        super();
        this.playerField = this.randomPlaceShip();
        this.playerName = 'Computer';
        this.availableMoves = Computer.generateAllMoves();
        this.possibleMoves = [];
        this.huntStack = [];
        this.lastHit = null;
        this.hitDirection = null;
    }

    refreshComputer() {
        this.refreshState();
        this.playerField = this.randomPlaceShip();
        this.availableMoves = Computer.generateAllMoves();
        this.possibleMoves = [];
        this.huntStack = [];
        this.lastHit = null;
        this.hitDirection = null;
    }

    computerField() {
        return this.playerField;
    }

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
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        directions.forEach(([dx, dy]) => {
            const nx = xCor + dx;
            const ny = yCor + dy;
            if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
                const index = this.availableMoves.findIndex(
                    ([ax, ay]) => ax === nx && ay === ny
                );
                if (index !== -1) {
                    this.huntStack.push(
                        this.availableMoves.splice(index, 1)[0]
                    );
                }
            }
        });
    }

    async computerAttack() {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        while (true) {
            let move;

            // Priority 1: Use hunt stack (target mode)
            if (this.huntStack.length) {
                move = this.huntStack.shift();
            } else {
                // Priority 2: Use probability targeting for smarter random moves
                move = this.getSmartMove();
            }

            const [xCor, yCor] = move;
            const attackResult = this.opponentBoard.receiveAttack(xCor, yCor);
            await delay(500);

            if (attackResult) {
                if (this.opponentBoard.field[xCor][yCor] === 'hit') {
                    const ship = this.opponentBoard.field[xCor][yCor];

                    // Check if ship is sunk
                    if (ship && ship.sunk) {
                        // Ship sunk - clear hunt mode and remove all adjacent cells from hunt stack
                        this.clearHuntMode();
                        this.removeAdjacentFromHunt(xCor, yCor, ship);
                    } else {
                        // Ship hit but not sunk - enter/continue hunt mode
                        this.handleHit(xCor, yCor);
                    }
                } else {
                    // Miss - continue hunt mode if active
                    if (!this.huntStack.length) {
                        this.lastHit = null;
                        this.hitDirection = null;
                    }
                }
                return { xCor, yCor };
            }
        }
    }

    getSmartMove() {
        // Use checkerboard pattern for higher probability of hitting ships
        const checkerboardMoves = this.availableMoves.filter(
            ([x, y]) => (x + y) % 2 === 0
        );

        if (checkerboardMoves.length > 0) {
            const index = Math.floor(Math.random() * checkerboardMoves.length);
            const move = checkerboardMoves[index];
            this.availableMoves.splice(
                this.availableMoves.findIndex(
                    ([x, y]) => x === move[0] && y === move[1]
                ),
                1
            );
            return move;
        }

        return this.getRandomMove();
    }

    handleHit(xCor, yCor) {
        if (this.lastHit) {
            const [lx, ly] = this.lastHit;

            // Determine direction if not already set
            if (!this.hitDirection) {
                if (lx === xCor) this.hitDirection = 'horizontal';
                if (ly === yCor) this.hitDirection = 'vertical';
            }

            // Add moves in the determined direction
            if (this.hitDirection === 'horizontal') {
                this.addDirectionalMoves(xCor, yCor, [
                    [0, 1],
                    [0, -1],
                ]);
            } else if (this.hitDirection === 'vertical') {
                this.addDirectionalMoves(xCor, yCor, [
                    [1, 0],
                    [-1, 0],
                ]);
            } else {
                this.addAdjacentMoves(xCor, yCor);
            }
        } else {
            this.addAdjacentMoves(xCor, yCor);
        }
        this.lastHit = [xCor, yCor];
    }

    addDirectionalMoves(xCor, yCor, directions) {
        directions.forEach(([dx, dy]) => {
            const nx = xCor + dx;
            const ny = yCor + dy;
            if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
                const index = this.availableMoves.findIndex(
                    ([ax, ay]) => ax === nx && ay === ny
                );
                if (index !== -1) {
                    this.huntStack.unshift(
                        this.availableMoves.splice(index, 1)[0]
                    );
                }
            }
        });
    }

    clearHuntMode() {
        this.huntStack = [];
        this.lastHit = null;
        this.hitDirection = null;
    }

    removeAdjacentFromHunt(xCor, yCor, ship) {
        // Remove unnecessary moves around sunk ship from hunt stack
        const shipCells = this.getShipCells(ship);
        const toRemove = new Set();

        shipCells.forEach(([sx, sy]) => {
            [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ].forEach(([dx, dy]) => {
                const nx = sx + dx;
                const ny = sy + dy;
                if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
                    toRemove.add(`${nx},${ny}`);
                }
            });
        });

        this.huntStack = this.huntStack.filter(
            ([x, y]) => !toRemove.has(`${x},${y}`)
        );
    }

    getShipCells(ship) {
        const cells = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.opponentBoard.field[i][j] === ship) {
                    cells.push([i, j]);
                }
            }
        }
        return cells;
    }
}

export default Computer;
