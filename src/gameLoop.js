const { Player } = require('./player');
const { Computer } = require('./computer');
const prompt = require('prompt-sync')();

/* eslint-disable no-underscore-dangle */

class GameLoop {
    constructor() {
        this.player = null;
        this.computer = new Computer();
    }

    async playerName() {
        return prompt('State your name commander! ');
    }

    async setPlayer() {
        const value = await this.playerName();
        this.player = new Player(value);
        this.player.opponentBoard = this.computer.computerField();
    }

    async userBoardInput() {
        return prompt(
            `${this.player.playerName}, do you want to place the ships, or have them randomly assigned! (Type 'Yes' to place ships, 'No' to randomly assign ships) `
        );
    }

    async setPlayerBoard() {
        let blade = false;

        while (!blade) {
            const userInput = (await this.userBoardInput()).toLowerCase();

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

    // startGame() {}

    // gameStatus() {}
}

// let first = new GameLoop();
// console.log(first.setPlayer());
// console.log(first.setPlayerBoard());

module.exports = {
    GameLoop,
};
