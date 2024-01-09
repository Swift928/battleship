const { Ship } = require('../ships');

class GameStatus {
    static endGame() {
        const computerField = document.getElementById('computerField');

        computerField.classList.add('game-over');
        computerField.style.pointerEvents = 'none';
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
}

module.exports = {
    GameStatus,
};
