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

    test("Computer attacks on opponent's game board is handled correctly", async () => {
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

    test.skip('Computer targets adjacent cells after a hit', async () => {
        const player = new Player('Chief');
        const ship = new Ship(3); // Use length 3 ship
        // Place ship horizontally from [0,0] to [2,0]
        const placed = player.playerField.placeShip(0, 0, ship, true); // true for horizontal
        expect(placed).not.toBe(false); // Ensure ship was placed successfully

        // Debug: check field state after placement
        console.log('Field at [0,0]:', player.playerField.field[0][0]);
        console.log('Field at [1,0]:', player.playerField.field[1][0]);
        console.log('Field at [2,0]:', player.playerField.field[2][0]);
        console.log('Ship length:', ship.length);
        console.log('Ship initial hits:', ship.hits);
        console.log('Ship initial sunk:', ship.sunk);

        computer.opponentBoard = player.playerField;

        // Force computer to attack the middle of the ship so it won't be sunk
        computer.availableMoves = [[1, 0]]; // Attack middle segment

        const first = await computer.computerAttack();
        expect(first).toEqual({ xCor: 1, yCor: 0 });

        // Check that the ship was hit but not sunk
        console.log('After hit - Ship hits:', ship.hits);
        console.log('After hit - Ship sunk:', ship.sunk);
        console.log(
            'Field at [1,0] after attack:',
            player.playerField.field[1][0]
        );

        expect(ship.hits).toBe(1);
        expect(ship.sunk).toBe(false);

        // After hitting a ship that's not sunk, huntStack should contain adjacent cells
        console.log('huntStack after hit:', computer.huntStack);
        expect(computer.huntStack.length).toBeGreaterThan(0);
    });
});
