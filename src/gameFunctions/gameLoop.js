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
        this.activePlayer = this.player;
        this.player.targetField = this.computer.computerField();
        this.computer.targetField = this.player.playerField;
    }

    async playGame() {
        const computerField = document.getElementById('computerField');

        while (!this.isGameOver) {
            await PlayerMove.move(this.player.opponentBoard);

            GameStatus.boardCheck(this, this.player.opponentBoard);
            if (this.isGameOver) {
                this.endOfGame();
                break;
            }

            this.switchTurns();
            computerField.style.pointerEvents = 'none';

            await ComputerMove.move(this, this.computer.opponentBoard);

            GameStatus.boardCheck(this, this.player.playerField);
            if (this.isGameOver) {
                this.endOfGame();
                break;
            }

            this.switchTurns();
            computerField.style.pointerEvents = 'auto';
        }

        return console.log(`${this.activePlayer} You Win!`);
    }

    switchTurns() {
        this.activePlayer =
            this.activePlayer === this.player ? this.computer : this.player;
    }

    endOfGame() {
        const gameFields = document.getElementById('gameFields');
        const endOfGameContainer =
            document.getElementById('endOfGameContainer');
        const applauseField = document.getElementById('applauseField');
        const playerScore = document.getElementById('playerScore');
        const computerScore = document.getElementById('computerScore');
        this.activePlayer.score += 1; // Increment the winning player's score

        gameFields.style.display = 'none';
        endOfGameContainer.style.display = 'flex';

        applauseField.textContent += ` ${this.activePlayer.playerName}`;

        playerScore.textContent += `${this.player.playerName}: ${this.player.score}`;
        computerScore.textContent += `${this.computer.playerName}: ${this.computer.score}`;

        const playAgainButton = document.querySelector('#playAgainButton');
        const endGameButton = document.querySelector('#endGameButton');

        playAgainButton.addEventListener('click', async () => {
            const formsDiv = document.getElementById('nameInputDiv');
            const shipPlacementDiv = document.getElementById(
                'shipPlacementChoice'
            );

            endOfGameContainer.style.display = 'none';
            formsDiv.classList.remove('hidden');
            shipPlacementDiv.classList.remove('hidden');

            // const { playerShipPlacement: nextPlacementAnswer } =
            //     await screenRender(playerName);
        });
    }
}

module.exports = {
    GameLoop,
};
