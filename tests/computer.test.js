const { Computer } = require('../src/computer');
const { Player } = require('../src/player');
const { Ship } = require('../src/ships');
const prompt = require('prompt-sync')();

describe('This suite will test the Computer class functionality', () => {
    let computer;

    beforeEach(() => {
        computer = new Computer();
    });

    test('Computer correctly places ships randomly around the field', () => {
        computer.randomPlaceShip();

        let shipsPlaced = new Set(
            computer.playerField.field.flat().filter((x) => x instanceof Ship)
        );

        expect(shipsPlaced.size).toBe(5);
    });

    test('Computer attacks on opponents game board is handled correctly', async () => {
        let player = new Player('Chief');
        player.randomPlaceShip();

        computer.randomPlaceShip();
        computer.targetField = player.playerField;

        // Deep copy to preserve the opponents board
        let initialOpponentBoard = JSON.parse(
            JSON.stringify(computer.opponentBoard.field)
        );

        await computer.computerAttack();

        expect(computer.opponentBoard.field).not.toEqual(initialOpponentBoard);
    });
});
