const { Player } = require('./player');

class Computer extends Player {
    constructor() {
        super();
        this.field = this.randomPlaceShip();
        this.player = 'Computer';
        this.opponentBoard = super.playerField;
    }

    computerField = () => this.field;

    async computerAttack() {
        for (;;) {
            await new Promise((resolve) => setTimeout(resolve, 200));

            const xCor = Math.floor(Math.random() * 10);
            const yCor = Math.floor(Math.random() * 10);

            if (this.opponentBoard.receiveAttack(xCor, yCor)) {
                return this.playerField;
            }
        }
    }
}

module.exports = {
    Computer,
};
