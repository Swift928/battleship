const { Player } = require('../player');
const { Computer } = require('../computer');
const { inputHandler } = require('./inputHandler');
const { PlayerMove } = require('./playerMove');
const { GameStatus } = require('./gameStatus');
const { Computer: ComputerMove } = require('./computerMove');

class GameLoop {
    constructor() {
        this.player = null;
        this.computer = new Computer();
        this.isGameOver = false;
        this.activePlayer = null;
    }

    async setPlayer(value, shipPlacementAnswer) {
        this.player = new Player(value);
        this.player.playerField.field = await inputHandler.setPlayerBoard(
            this.player,
            shipPlacementAnswer
        );
        this.activePlayer = this.player.playerName;
        this.player.targetField = this.computer.computerField();
        this.computer.targetField = this.player.playerField;
    }

    async playGame() {
        const computerField = document.getElementById('computerField');

        while (!this.isGameOver) {
            await PlayerMove.move(this.player.opponentBoard);

            GameStatus.boardCheck(this, this.player.opponentBoard);
            if (this.isGameOver) {
                break;
            }

            this.switchTurns();
            computerField.style.pointerEvents = 'none';

            await ComputerMove.move(this, this.computer.opponentBoard);

            GameStatus.boardCheck(this, this.player.playerField);
            if (this.isGameOver) {
                break;
            }

            this.switchTurns();
            computerField.style.pointerEvents = 'auto';
        }

        return console.log(`${this.activePlayer} You Win!`);
    }

    switchTurns() {
        this.activePlayer =
            this.activePlayer === this.player.playerName
                ? this.computer.playerName
                : this.player.playerName;
    }
}

module.exports = {
    GameLoop,
};
