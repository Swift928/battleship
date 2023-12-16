const { GameLoop } = require('../src/gameLoop');
const prompt = require('prompt-sync')();

describe('This suite will test the game loop functionality', () => {
    let game;

    beforeEach(() => {
        jest.resetAllMocks();
        game = new GameLoop();
    });

    test('The Player name is recorded correctly', async () => {
        const mockPlayerName = jest.spyOn(game, 'playerName');
        mockPlayerName.mockReturnValueOnce('Chief');

        await game.setPlayer();

        expect(game.player.playerName).toBe('Chief');
    });

    test('Correctly handles player game board - User chooses "No"', async () => {
        const mockPlayerName = jest.spyOn(game, 'playerName');
        mockPlayerName.mockReturnValueOnce('Chief');

        await game.setPlayer();

        const initialPlayerBoard = JSON.parse(
            JSON.stringify(game.player.playerField)
        );

        const mockPlayerBoardInput = jest.spyOn(game, 'userBoardInput');
        mockPlayerBoardInput.mockReturnValueOnce('No');

        await game.setPlayerBoard();

        expect(game.player.playerField).not.toEqual(initialPlayerBoard);
    });

    test('Correctly handles player game board - User chooses "Yes"', async () => {
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
