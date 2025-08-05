import { jest } from '@jest/globals';
import GameLoop from '../src/gameFunctions/gameLoop.js';
import inputHandler from '../src/gameFunctions/inputHandler.js';
import GameBoard from '../src/gameBoard.js';

describe('This suite will test the game loop functionality', () => {
    let game;

    beforeEach(() => {
        jest.resetAllMocks();
        inputHandler.setPlayerBoard = jest
            .fn()
            .mockResolvedValue(new GameBoard().field);
        game = new GameLoop();
    });

    test('The Player name is recorded correctly', async () => {
        await game.setPlayer('Chief');
        expect(game.player.playerName).toBe('Chief');
    });
});
