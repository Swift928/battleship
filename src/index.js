import './style.css';
import screenRender from './screenRender';
import { Ship } from './ships';

function makeField(thisBoard, thisField, i, j, shipsContainer) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    if (thisField[i][j] instanceof Ship) {
        const ship = thisField[i][j];

        let knownVessel = shipsContainer.find(
            (container) => container.vessel === ship
        );

        if (!knownVessel) {
            knownVessel = {
                vessel: ship,
                container: document.createElement('div'),
            };

            knownVessel.container.classList.add('overlay');

            const { shipImage } = ship;

            shipImage.alt = 'Ship';
            shipImage.style.height = `${40}px`;
            knownVessel.container.appendChild(shipImage);

            knownVessel.container.style.top = `${
                i * 50 + 5 + (i > 0 ? i * 2 : 0)
            }px `;
            knownVessel.container.style.left = `${
                j * 50 +
                (j > 0 ? 2 * j : 0) +
                (ship.length === 3 ? 15.5 : 0) +
                (ship.length === 4 ? 10.5 : 0) +
                (ship.length === 5 ? 16.5 : 0)
            }px`;

            shipsContainer.push(knownVessel);
        }

        thisBoard.append(knownVessel.container);
    }
    thisBoard.append(gridItem);
}

const { GameLoop } = require('./gameFunctions/gameLoop');

(async () => {
    const game = new GameLoop();

    const playerField = document.getElementById('playerField');
    const computerField = document.getElementById('computerField');

    const { playerName, playerShipPlacement } = await screenRender();
    playerField.style.display = 'grid';
    computerField.style.display = 'grid';

    await game.setPlayer(playerName, playerShipPlacement);
    const playerBoard = game.player.playerField.field;
    const computerBoard = game.computer.playerField.field;

    const shipsContainer = [];

    for (let i = 0; i < playerBoard.length; i++) {
        for (let j = 0; j < playerBoard[i].length; j++) {
            makeField(computerField, computerBoard, i, j, shipsContainer);
            makeField(playerField, playerBoard, i, j, shipsContainer);
        }
    }

    game.playGame();
})();
