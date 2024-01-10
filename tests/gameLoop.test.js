const { GameLoop } = require('../src/gameFunctions/gameLoop');
const { inputHandler } = require('../src/gameFunctions/inputHandler');
const prompt = require('prompt-sync')();

jest.mock('../src/gameFunctions/inputHandler');

describe('This suite will test the game loop functionality', () => {
    let game;

    beforeEach(() => {
        jest.resetAllMocks();
        game = new GameLoop();
    });

    test('The Player name is recorded correctly', async () => {
        await game.setPlayer('Chief', 'Random');

        inputHandler.setPlayerBoard.mockReturnValueOnce();

        expect(game.player.playerName).toBe('Chief');
    });

    test.skip('Correctly handles player game board - User chooses "No"', async () => {
        value = 'no';
        const mockPlayerBoard = jest.spyOn(inputHandler, 'setPlayerBoard');

        await game.setPlayer('Chief', 'no');

        await inputHandler.setPlayerBoard.mockReturnValueOnce();

        const initialPlayerBoard = JSON.parse(
            JSON.stringify(game.player.playerField)
        );

        console.log(game.player.playerField);

        // expect(game.player.playerField).not.toEqual(initialPlayerBoard);
    });

    test.skip('Correctly handles player game board - User chooses "Yes"', async () => {
        const mockPlayerName = jest.spyOn(game, 'playerName');
        mockPlayerName.mockReturnValueOnce('Chief');

        await game.setPlayer();

        const initialPlayerBoard = JSON.parse(
            JSON.stringify(game.player.playerField)
        );

        mockPlayerBoardInput = jest.spyOn(game, 'userBoardInput');
        mockPlayerBoardInput.mockReturnValueOnce('yes');

        const mockPrompt = jest.spyOn(game.player, 'getUserInput');
        mockPrompt.mockImplementationOnce(() => Promise.resolve('1 1'));
        mockPrompt.mockImplementationOnce(() => Promise.resolve('2 2'));
        mockPrompt.mockImplementationOnce(() => Promise.resolve('3 3'));
        mockPrompt.mockImplementationOnce(() => Promise.resolve('6 2'));
        mockPrompt.mockImplementationOnce(() => Promise.resolve('8 2'));

        await game.setPlayerBoard();

        expect(game.player.playerField).not.toEqual(initialPlayerBoard);
    });
});
