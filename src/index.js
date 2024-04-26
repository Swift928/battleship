import panVertical from './images/pan-vertical.svg';
import panHorizontal from './images/pan-horizontal.svg';
import length2ShipImg from './images/boat.png';
import length3ShipImg from './images/length3Ship.svg';
import length4ShipImg from './images/length4Ship.png';
import length5ShipImg from './images/length5Ship.png';

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
    const playAgainButton = document.querySelector('#playAgainButton');
    const endGameButton = document.querySelector('#endGameButton');

    const renderBoard = () => {
        const playerField = game.player.playerField.field;
        const computerField = game.computer.playerField.field;

        FieldCreation.renderBoard(playerFieldElement, playerField);
        FieldCreation.renderBoard(computerFieldElement, computerField);
    };

    const startGame = async () => {
        if (!game) game = new GameLoop();

        if (!state) state = await screenRender(state?.playerName);

        await game.setPlayer(state.playerName);

        gameFields.classList.remove('hidden');
        [playerFieldElement, computerFieldElement].forEach(
            (el) => (el.style.display = 'grid')
        );
        gameFields
            .querySelectorAll('*')
            .forEach((element) => element.classList.remove('hidden'));

        renderBoard();

        game.playGame();
    };

    startGame();

    playAgainButton.addEventListener('click', async () => {
        [endOfGameContainer].forEach((el) => el.classList.toggle('hidden'));

        game.resetGame();

        [playerFieldElement, computerFieldElement].forEach(
            (el) => (el.innerHTML = '')
        );

        await startGame();
    });

    endGameButton.addEventListener('click', () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    });
})();
