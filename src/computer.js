const { Player } = require('./player');

class Computer extends Player {
    constructor() {
        super();
        this.playerField = this.randomPlaceShip();
        this.playerName = 'Computer';
    }

    computerField = () => this.playerField;

    async computerAttack() {
        for (;;) {
            await new Promise((resolve) => setTimeout(resolve, 500));

            const xCor = Math.floor(Math.random() * 10);
            const yCor = Math.floor(Math.random() * 10);

            if (this.opponentBoard.receiveAttack(xCor, yCor)) {
                return { xCor, yCor };
            }
        }
    }
}

module.exports = {
    Computer,
};
