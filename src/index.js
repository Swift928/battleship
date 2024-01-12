import './style.css';
import screenRender from './screenRender';

const { FieldCreation } = require('./gameFields/fieldCreation');

const { GameLoop } = require('./gameFunctions/gameLoop');

(async () => {
    const game = new GameLoop();

    const playerFieldElement = document.getElementById('playerField');
    const computerFieldElement = document.getElementById('computerField');

    const { playerName, playerShipPlacement } = await screenRender();
    playerFieldElement.style.display = 'grid';
    computerFieldElement.style.display = 'grid';

    await game.setPlayer(playerName, playerShipPlacement);
    const playerField = game.player.playerField.field;
    const computerField = game.computer.playerField.field;

    FieldCreation.renderBoard(playerFieldElement, playerField);
    FieldCreation.renderBoard(computerFieldElement, computerField);

    game.playGame();
})();
