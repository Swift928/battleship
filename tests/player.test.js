import Player from '../src/player.js';
import Computer from '../src/computer.js';
import Ship from '../src/ships.js';

describe('This suite will test the Player class functionality', () => {
    let player;
    let computer;

    beforeEach(() => {
        player = new Player('Chief');
        computer = new Computer();
    });

    test('Correctly places ships on the field after entering valid coordinates.', async () => {
        const mockGetUserInput = jest.fn();
        mockGetUserInput.mockReturnValueOnce('3 4');
        mockGetUserInput.mockReturnValueOnce('4 4');
        mockGetUserInput.mockReturnValueOnce('2 1');
        mockGetUserInput.mockReturnValueOnce('1 4');
        mockGetUserInput.mockReturnValueOnce('7 1');

        player.getUserInput = mockGetUserInput;

        await player.placeShip();

        const shipsOnFieldSet = new Set(
            player.playerField.field.flat().filter((x) => x instanceof Ship)
        );

        expect(shipsOnFieldSet.size).toBe(5);
    });

    test('Correctly places ships randomly around the field', () => {
        player.randomPlaceShip();

        let shipsPlaced = new Set(
            player.playerField.field.flat().filter((x) => x instanceof Ship)
        );

        expect(shipsPlaced.size).toBe(5);
    });

    test('Player loads opponent field after placing ships', () => {
        // Randomly Places ships
        player.randomPlaceShip();

        // Player retrieves the opponent's field
        player.targetField = computer.field;

        // Ensure the opponents field is correctly loaded
        expect(player.opponentBoard).toBe(computer.field);
    });

    test('Ensures player attacks are correctly recorded', () => {
        // Randomly Places ships
        player.randomPlaceShip();

        // Player retrieves the opponent's field
        player.targetField = computer.playerField;

        // Attack the computer field
        player.opponentBoard.receiveAttack(5, 6);

        // Ensure the opponents field is correctly loaded
        expect(player.opponentBoard).toBe(computer.playerField);
    });

    test.skip('Correctly handles ship overlapping.', async () => {
        const mockGetUserInput = jest.fn();
        mockGetUserInput.mockReturnValueOnce('3 4');
        mockGetUserInput.mockReturnValueOnce('34 4');

        player.getUserInput = mockGetUserInput;

        await player.placeShip();

        const shipsOnFieldSet = new Set(
            player.playerField.field.flat().filter((x) => x instanceof Ship)
        );

        expect(shipsOnFieldSet.size).toBe(5);
    });

    test.skip('Handles console.error output when placing ship fails', async () => {
        const mockError = jest
            .spyOn(console, 'error')
            .mockImplementation(() => {});

        // Mocking the getUserInput function to provide invalid coordinates
        player.getUserInput = jest.fn().mockResolvedValue('sdfds');

        try {
            await player.placeShip();
        } catch (error) {
            console.error(error.message);
        }

        expect(mockError).toHaveBeenCalledWith(
            'Invalid input. Please enter valid coordinates.'
        );

        // Restore the original console.error function
        mockError.mockRestore();
    });
});
