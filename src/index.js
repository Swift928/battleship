import './style.css';
import screenRender from './screenRender';

const { GameLoop } = require('./gameLoop');

(async () => {
    const game = new GameLoop();
    const gridContainer = document.getElementById('playerField');

    const { playerName, playerShipPlacement } = await screenRender();
    gridContainer.style.display = 'grid';

    await game.setPlayer(playerName);
    const playerBoard = await game.setPlayerBoard(playerShipPlacement);

    for (let i = 0; i < playerBoard.length; i++) {
        for (let j = 0; j < playerBoard[i].length; j++) {
            const gridItem = document.createElement('div');

            gridItem.classList.add('grid-item');

            gridContainer.appendChild(gridItem);
        }
    }

    console.log('Player Board:', JSON.stringify(playerBoard));
})();
