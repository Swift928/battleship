import Player from '../player';
import Computer from '../computer';
import inputHandler from './inputHandler';
import PlayerMove from './playerMove';
import GameStatus from './gameStatus';
import ComputerMove from './computerMove';
import GameBoard from '../gameBoard';

class GameLoop {
    constructor() {
        this.player = null;
        this.computer = new Computer();
        this.isGameOver = false;
        this.activePlayer = null;
    }

    async setPlayer(value) {
        if (!this.player) this.player = new Player(value);
        this.player.playerField.field = await inputHandler.setPlayerBoard(
            this.player
        );
        this.activePlayer = this.player;
        this.player.targetField = this.computer.computerField();
        this.computer.targetField = this.player.playerField;
    }

    async playGame() {
        const computerField = document.getElementById('computerField');

        // Hide the ship images
        const computerShips = computerField.querySelectorAll('.overlay');
        computerShips.forEach((ship) => (ship.style.display = 'none'));

        while (!this.isGameOver) {
            const hitTarget = await this.performTurn();

            GameStatus.boardCheck(this, this.player.opponentBoard);
            if (this.isGameOver) {
                this.endOfGame();
                break;
            }

            if (!hitTarget) {
                this.switchTurns();
            }

            computerField.style.pointerEvents = 'auto';
        }

        return console.log(`${this.activePlayer.playerName} You Win!`);
    }

    async performTurn() {
        const computerField = document.getElementById('computerField');
        const isPlayerTurn = this.activePlayer === this.player;

        if (isPlayerTurn) {
            return PlayerMove.move(this.player.opponentBoard);
        }
        computerField.style.pointerEvents = 'none';
        return ComputerMove.move(this, this.computer.opponentBoard);
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
        this.player.playerField = new GameBoard();
        this.computer = new Computer();

        gameFields.classList.toggle('hidden');
        gameFields
            .querySelectorAll('*')
            .forEach((element) => element.classList.add('hidden'));
        endOfGameContainer.classList.toggle('hidden');

        applauseField.textContent =
            this.activePlayer !== this.player ? 'You Lose!' : 'You Win!';

        playerScore.textContent = `${this.player.playerName}: ${this.player.score}`;
        computerScore.textContent = `${this.computer.playerName}: ${this.computer.score}`;
    }

    resetGame() {
        this.player.refreshState();
        this.computer.refreshComputer();
        this.isGameOver = false;
        GameStatus.newGame();
    }
}

// module.exports = {
//     GameLoop,
// };

export default GameLoop;
