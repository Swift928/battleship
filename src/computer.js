const { Player } = require('./player');

class Computer extends Player {
    constructor() {
        super();
        this.field = this.randomPlaceShip();
    }

    computerField = () => this.field;

    async computerAttack() {
        for (;;) {
            const result = await new Promise((resolve) => {
                setTimeout(() => {
                    const xCor = Math.floor(Math.random() * 10);
                    const yCor = Math.floor(Math.random() * 10);

                    if (this.opponentBoard.receiveAttack(xCor, yCor)) {
                        resolve(true);
                    }
                }, 200);
            });
            if (result) return this.playerField;
        }
    }
}

// let first = new Computer();

// console.log(first.computerField().receiveAttack(5, 6));

module.exports = {
    Computer,
};
