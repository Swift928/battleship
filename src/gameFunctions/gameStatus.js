const { Ship } = require('../ships');

class GameStatus {
    static endGame() {
        const computerField = document.getElementById('computerField');

        computerField.classList.add('game-over');
    }

    static boardCheck(gameInstance, opponent) {
        const ships = opponent.field
            .flat()
            .filter((field) => field instanceof Ship);

        if (Array.from(ships).every((ship) => ship.sunk === true)) {
            GameStatus.endGame();
            // eslint-disable-next-line no-param-reassign
            gameInstance.isGameOver = true;
        }
    }

    static newGame() {
        const computerField = document.getElementById('computerField');

        computerField.classList.remove('game-over');
    }
}

module.exports = {
    GameStatus,
};
