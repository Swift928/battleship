import './style.css';
import screenRender from './screenRender';

const { FieldCreation } = require('./gameFields/fieldCreation');

const { GameLoop } = require('./gameFunctions/gameLoop');

(async () => {
    let game;
    let state;
    const playerFieldElement = document.getElementById('playerField');
    const computerFieldElement = document.getElementById('computerField');
    const gameFields = document.getElementById('gameFields');
    const endOfGameContainer = document.getElementById('endOfGameContainer');

    const startGame = async () => {
        if (!game) game = new GameLoop();

        if (!state) {
            state = await screenRender();
        } else {
            state = await screenRender(state.playerName);
        }

        gameFields.classList.remove('hidden');
        playerFieldElement.style.display = 'grid';
        computerFieldElement.style.display = 'grid';

        await game.setPlayer(state.playerName, state.playerShipPlacement);
        const playerField = game.player.playerField.field;
        const computerField = game.computer.playerField.field;

        FieldCreation.renderBoard(playerFieldElement, playerField);
        FieldCreation.renderBoard(computerFieldElement, computerField);

        game.playGame();
    };

    startGame();

    const playAgainButton = document.querySelector('#playAgainButton');
    const endGameButton = document.querySelector('#endGameButton');

    playAgainButton.addEventListener('click', async () => {
        const formsDiv = document.getElementById('nameInputDiv');

        endOfGameContainer.classList.toggle('hidden');
        formsDiv.classList.toggle('hidden');

        game.resetGame();

        playerFieldElement.innerHTML = '';
        computerFieldElement.innerHTML = '';

        await startGame();
    });
})();
