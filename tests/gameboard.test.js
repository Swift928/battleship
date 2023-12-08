const { GameBoard } = require('../src/gameBoard');
const { Ship } = require('../src/ships');

describe('These suite of test will test the game board functionality', () => {
    let testField;
    let testShip;

    beforeAll(() => {
        testField = new GameBoard();
        testShip = new Ship(4);
    });

    test.only('this will test that the specified spot in the game board is available', () => {
        expect(testField.isSpaceAvailable(4, 5, testField)).toBe(true);
    });

    test('this will return a placeholder for the ship on the board', () => {
        expect(testField.placeShip(5, 5, testShip)).toBe(true);
    });

    test('Missed attacks should display a placeholder', () => {
        testField.placeShip(2, 2, testShip);
        expect(testField.receiveAttack(0, 0)).toBe(testField.field);
    });

    test('Attacks on ships should mark a part of the ship', () => {
        testField.placeShip(2, 2, testShip);
        expect(testField.receiveAttack(2, 3)).toBe(testField.field);
    });
});
