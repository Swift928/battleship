const { Player } = require('./player');
const { Computer } = require('./computer');
const { Ship } = require('./ships');
const prompt = require('prompt-sync')();

/* eslint-disable no-underscore-dangle */

class GameLoop {
    constructor() {
        this.player = null;
        this.computer = new Computer();
        this.isGameOver = false;
        this.activePlayer = null;
    }

    async setPlayer(value) {
        this.player = new Player(value);
        this.activePlayer = this.player.playerName;
        this.player.opponentBoard = this.computer.computerField();
        this.computer.opponentBoard = this.player.playerField;
    }

    async userBoardInput() {
        return prompt(
            `${this.player.playerName}, do you want to place the ships, or have them randomly assigned! (Type 'Yes' to place ships, 'No' to randomly assign ships) `
        );
    }

    async setPlayerBoard(value = null) {
        let blade = false;

        while (!blade) {
            const userInput =
                value || (await this.userBoardInput()).toLowerCase();

            if (userInput === 'yes') {
                await this.player.placeShip();
                blade = true;
                break;
            } else if (userInput === 'no') {
                this.player.randomPlaceShip();
                blade = true;
                break;
            }
            console.log('Invalid input. Please type "Yes" or "No". \n');
        }

        return this.player.playerField.field;
    }

    async playGame() {
        const computerField = document.getElementById('computerField');
        const playerField = document.getElementById('playerField');

        while (!this.isGameOver) {
            const playerPromise = new Promise((resolve) => {
                computerField.addEventListener('click', (event) => {
                    if (event.target.classList.contains('grid-item')) {
                        const index = Array.from(
                            event.target.parentNode.children
                        )
                            .filter(
                                (item) => !item.classList.contains('overlay')
                            )
                            .indexOf(event.target);

                        const rowIndex = Math.floor(index / 10);
                        const colIndex = index % 10;

                        this.player.opponentBoard.receiveAttack(
                            rowIndex,
                            colIndex
                        );

                        if (
                            this.player.opponentBoard.field[rowIndex][
                                colIndex
                            ] === 'hit'
                        ) {
                            const dot = document.createElement('div');
                            dot.classList.add('dot');
                            event.target.appendChild(dot);
                        }

                        event.target.classList.add('used-item');
                        this.boardCheck();
                        resolve();
                    }
                });
            });

            await playerPromise;

            this.switchTurns();
            computerField.style.pointerEvents = 'none';

            const computerPromise = new Promise(async (resolve) => {
                const { xCor, yCor } = await this.computer.computerAttack();

                const gridElements = Array.from(playerField.children).filter(
                    (item) => !item.classList.contains('overlay')
                );

                const index = (10 - yCor - 1) * 10 + xCor;

                const element = gridElements[index];

                if (this.computer.opponentBoard.field[xCor][yCor] === 'hit') {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');

                    element.appendChild(dot);
                }
                element.classList.add('used-item');

                this.boardCheck();
                resolve();
            });

            await computerPromise;

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

    boardCheck() {
        const ships = new Set(
            this.computer.playerField.field
                .flat()
                .filter((field) => field instanceof Ship)
        );

        if (Array.from(ships).every((ship) => ship.sunk === true)) {
            this.endGame();
            this.isGameOver = true;
            // return true;
        }

        // return false;
    }

    endGame() {
        const computerField = document.getElementById('computerField');

        computerField.classList.add('game-over');
    }
}

module.exports = {
    GameLoop,
};
