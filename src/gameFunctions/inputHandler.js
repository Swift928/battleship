/* eslint-disable no-alert */

class InputHandler {
    static async getUserBoardInput(playerName) {
        return prompt(
            `${playerName}, do you want to place the ships, or have them randomly assigned? (Type 'Yes' to place ships, 'No' to randomly assign ships)`
        );
    }

    static async setPlayerBoard(player) {
        const response = await InputHandler.getUserBoardInput(player.playerName);

        if (response && response.trim().toLowerCase().startsWith('n')) {
            player.randomPlaceShip();
        } else {
            await player.manualShipPlacement();
        }

        return player.playerField.field;
    }
}

export default InputHandler;

