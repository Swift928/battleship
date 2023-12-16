import './style.css';

const { GameLoop } = require('./gameLoop');

(async () => {
    const game = new GameLoop();

    // Call your methods synchronously
    await game.setPlayer();
    const playerBoard = await game.setPlayerBoard();

    console.log('Player Board:', playerBoard);

    // Continue with other synchronous operations
    // game.startGame();
    // game.gameStatus();
})();
