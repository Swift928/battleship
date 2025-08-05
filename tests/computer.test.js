import Computer from '../src/computer.js';
import Player from '../src/player.js';
import Ship from '../src/ships.js';

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

    test('Computer attacks on opponent\'s game board is handled correctly', async () => {
        let player = new Player('Chief');
        player.randomPlaceShip();

        computer.randomPlaceShip();
        computer.targetField = player.playerField;

        // Deep copy to preserve the opponent's board
        let initialOpponentBoard = JSON.parse(
            JSON.stringify(computer.opponentBoard.field)
        );

        await computer.computerAttack();

        expect(computer.opponentBoard.field).not.toEqual(initialOpponentBoard);
    });

    test('Computer targets adjacent cells after a hit', async () => {
        const player = new Player('Chief');
        const ship = new Ship(2);
        player.playerField.placeShip(0, 0, ship);
        computer.targetField = player.playerField;

        computer.possibleMoves = [[0, 0]];

        const first = await computer.computerAttack();
        expect(first).toEqual({ xCor: 0, yCor: 0 });

        expect(computer.possibleMoves).toEqual(
            expect.arrayContaining([
                [1, 0],
                [0, 1],
            ])
        );

        const second = await computer.computerAttack();

        const isNeighbor =
            (second.xCor === 1 && second.yCor === 0) ||
            (second.xCor === 0 && second.yCor === 1);

        expect(isNeighbor).toBe(true);
    });
});
