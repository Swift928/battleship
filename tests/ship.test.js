const { Ship } = require('../src/ships');

describe('Ship', () => {
    let testShip;

    beforeAll(() => {
        testShip = new Ship(10);
    });

    test('One hit on the ship should increment the hits on the ship by 1', () => {
        testShip.hit();
        expect(testShip.hits).toBe(1);
    });

    test(`This will check the ship hasn't sunk after one hit`, () => {
        testShip.hit();
        expect(testShip.sunk).toBe(false);
    });

    test('display the length of the ship', () => {
        expect(testShip.length).toBe(10);
    });

    test('This will check that the ship has sunk', () => {
        while (testShip.hits !== testShip.length) {
            testShip.hit();
        }
        expect(testShip.sunk).toBe(true);
    });
});
