import GameBoard from '../src/gameBoard.js';
import Ship from '../src/ships.js';

describe('These suite of test will test the game board functionality', () => {
    let testField;
    let testShip;

    beforeAll(() => {
        testField = new GameBoard();
        testShip = new Ship(4);
    });

    test('this will test that the specified spot in the game board is available', () => {
        expect(testField.isSpaceAvailable(4, 5, testField)).toBe(true);
    });

    test('this will return a placeholder for the ship on the board', () => {
        expect(testField.placeShip(5, 5, testShip)).toBe(testField.field);
    });

    test('Missed attacks should display a placeholder', () => {
        expect(testField.receiveAttack(0, 0)).toBe(testField.field);
    });

    test('Attacks on ships should increase the hits on a ship', () => {
        expect(testField.receiveAttack(5, 6)).toBe(testField.field);
    });

    test('Attacks on ships should increase the hits on a ship', () => {
        expect(testField.receiveAttack(5, 7)).toBe(testField.field);
    });

    test('Attacks on already missed spaces should be returned false', () => {
        expect(testField.receiveAttack(0, 0)).toBe(false);
    });
});
