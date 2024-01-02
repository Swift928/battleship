import './style.css';
import screenRender from './screenRender';
import { Ship } from './ships';

const { GameLoop } = require('./gameLoop');

(async () => {
    const game = new GameLoop();
    const playerField = document.getElementById('playerField');
    const computerField = document.getElementById('computerField');

    const { playerName, playerShipPlacement } = await screenRender();
    playerField.style.display = 'grid';
    computerField.style.display = 'grid';

    await game.setPlayer(playerName);
    const playerBoard = await game.setPlayerBoard(playerShipPlacement);

    const shipsContainer = [];

    for (let i = 0; i < playerBoard.length; i++) {
        for (let j = 0; j < playerBoard[i].length; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');

            const compGridItem = document.createElement('div');
            compGridItem.classList.add('grid-item');

            if (playerBoard[i][j] instanceof Ship) {
                const ship = playerBoard[i][j];

                let knownVessel = shipsContainer.find(
                    (container) => container.vessel === ship
                );

                if (!knownVessel) {
                    knownVessel = {
                        vessel: ship,
                        container: document.createElement('div'),
                    };

                    knownVessel.container.classList.add('overlay');

                    const shipImage = document.createElement('img');
                    if (ship.length === 3) {
                        shipImage.src = '/src/images/length3Ship.svg';
                        shipImage.classList.add('length3Ship');
                    } else if (ship.length === 4) {
                        shipImage.src = '/src/images/length4Ship.png';
                        shipImage.classList.add('length4Ship');
                    } else if (ship.length === 5) {
                        shipImage.src = '/src/images/length5Ship.png';
                        shipImage.classList.add('length5Ship');
                    } else {
                        shipImage.src = '/src/images/boat.png';
                        shipImage.classList.add('length2Ship');
                    }

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

                playerField.append(knownVessel.container);
            }

            playerField.appendChild(gridItem);
            computerField.appendChild(compGridItem);
        }
    }

    console.log('Player Board:', JSON.stringify(playerBoard));
})();
