/* eslint-disable no-await-in-loop */
class inputHandler {
    static async getUserBoardInput(playerName) {
        // eslint-disable-next-line no-alert
        return prompt(
            `${playerName}, do you want to place the ships, or have them randomly assigned! (Type 'Yes' to place ships, 'No' to randomly assign ships) `
        );
    }

    static async setPlayerBoard(player, value = null) {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const userInput =
                value ||
                (await inputHandler.getUserBoardInput(player.playerName))
                    .toLowerCase()
                    .trim();

            if (userInput === 'yes') {
                await player.placeShip();
                break;
            } else if (userInput === 'no') {
                player.randomPlaceShip();
                break;
            }

            console.log('Invalid input. Please type "Yes" or "No". \n');
        }

        return player.playerField.field;
    }
}

module.exports = {
    inputHandler,
};
