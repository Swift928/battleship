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
        // Add adjacent cells to huntStack for smarter targeting
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
                // Only add if not already attacked
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
        return new Promise((resolve) => {
            const attemptAttack = () => {
                let move;
                // Prioritize huntStack (target mode)
                if (this.huntStack.length) {
                    move = this.huntStack.shift();
                } else {
                    move = this.getRandomMove();
                }

                const [xCor, yCor] = move;
                const attackResult = this.opponentBoard.receiveAttack(
                    xCor,
                    yCor
                );

                if (attackResult) {
                    if (this.opponentBoard.field[xCor][yCor] === 'hit') {
                        // If lastHit exists, try to determine direction
                        if (this.lastHit) {
                            const [lx, ly] = this.lastHit;
                            if (!this.hitDirection) {
                                if (lx === xCor)
                                    this.hitDirection = 'horizontal';
                                if (ly === yCor) this.hitDirection = 'vertical';
                            }
                            // Continue in the same direction
                            if (this.hitDirection === 'horizontal') {
                                [
                                    [1, 0],
                                    [-1, 0],
                                ].forEach(([dx, dy]) => {
                                    const nx = xCor + dx;
                                    const ny = yCor + dy;
                                    if (
                                        nx >= 0 &&
                                        nx < 10 &&
                                        ny >= 0 &&
                                        ny < 10
                                    ) {
                                        const index =
                                            this.availableMoves.findIndex(
                                                ([ax, ay]) =>
                                                    ax === nx && ay === ny
                                            );
                                        if (index !== -1) {
                                            this.huntStack.push(
                                                this.availableMoves.splice(
                                                    index,
                                                    1
                                                )[0]
                                            );
                                        }
                                    }
                                });
                            } else if (this.hitDirection === 'vertical') {
                                [
                                    [0, 1],
                                    [0, -1],
                                ].forEach(([dx, dy]) => {
                                    const nx = xCor + dx;
                                    const ny = yCor + dy;
                                    if (
                                        nx >= 0 &&
                                        nx < 10 &&
                                        ny >= 0 &&
                                        ny < 10
                                    ) {
                                        const index =
                                            this.availableMoves.findIndex(
                                                ([ax, ay]) =>
                                                    ax === nx && ay === ny
                                            );
                                        if (index !== -1) {
                                            this.huntStack.push(
                                                this.availableMoves.splice(
                                                    index,
                                                    1
                                                )[0]
                                            );
                                        }
                                    }
                                });
                            } else {
                                this.addAdjacentMoves(xCor, yCor);
                            }
                        } else {
                            this.addAdjacentMoves(xCor, yCor);
                        }
                        this.lastHit = [xCor, yCor];
                    } else {
                        // If miss, reset direction if huntStack is empty
                        if (!this.huntStack.length) {
                            this.lastHit = null;
                            this.hitDirection = null;
                        }
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
