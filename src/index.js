import './style.css';
import screenRender from './screenRender';
import FieldCreation from './gameFields/fieldCreation';
import GameLoop from './gameFunctions/gameLoop';

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
        game ||= new GameLoop(); // Initializes the game if not already initialized.

        state ||= await screenRender(state?.playerName); // Renders the screen and sets up the state.

        await game.setPlayer(state.playerName); // Sets the player name in the game.

        gameFields.classList.remove('hidden'); // Makes the game fields visible.
        [playerFieldElement, computerFieldElement].forEach(
            (el) => (el.style.display = 'grid') // Sets the display style to 'grid' for the game fields.
        );

        gameFields
            .querySelectorAll('*')
            .forEach((element) => element.classList.remove('hidden')); // Makes all elements within the game fields visible.

        renderBoard(); // Renders the initial game board.

        game.playGame(); // Starts the game loop.
    };

    startGame();

    playAgainButton.addEventListener('click', async () => {
        [endOfGameContainer].forEach((el) => el.classList.toggle('hidden')); // Toggles visibility of the end-of-game container.

        game.resetGame(); // Resets the game logic.

        [playerFieldElement, computerFieldElement].forEach(
            (el) => (el.innerHTML = '') // Clears the contents of the player and computer fields.
        );

        await startGame(); // Restarts the game.
    });

    endGameButton.addEventListener('click', () => {
        window.location.reload();
    });
})();
