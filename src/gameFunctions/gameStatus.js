const { Ship } = require('../ships');

class GameStatus {
    static endGame() {
        document.getElementById('computerField').classList.add('game-over');
    }

    static updateRemainingShipsCount(playerName, count) {
        const elementId =
            playerName === 'Computer'
                ? 'playerShipsRemaining'
                : 'compShipsRemaining';
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = count;
        } else {
            console.error(`Element with ID '${elementId}' not found.`);
        }
    }

    static sunkShipsUpdate(gameInstance, ships) {
        const { playerName } = gameInstance.activePlayer;
        GameStatus.updateRemainingShipsCount(playerName, ships.size);
    }

    static boardCheck(gameInstance, opponent) {
        const ships = new Set(
            opponent.field.flat().filter((field) => field instanceof Ship)
        );

        GameStatus.sunkShipsUpdate(gameInstance, ships);

        if (Array.from(ships).every((ship) => ship.sunk === true)) {
            GameStatus.endGame();
            // eslint-disable-next-line no-param-reassign
            gameInstance.isGameOver = true;
        }
    }

    static newGame() {
        document.getElementById('computerField').classList.remove('game-over');

        document.querySelectorAll('.shipsRemaining').forEach((element) => {
            // eslint-disable-next-line no-param-reassign
            element.innerHTML = 5;
        });
    }
}

module.exports = {
    GameStatus,
};
