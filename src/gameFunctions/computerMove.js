class Computer {
    static async move(gameInstance, oppBoard) {
        const playerField = document.getElementById('playerField');
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve) => {
            const { xCor, yCor } = await gameInstance.computer.computerAttack();

            const gridElements = Array.from(playerField.children).filter(
                (item) => !item.classList.contains('overlay')
            );

            const index = xCor * 10 + yCor;

            const element = gridElements[index];

            if (oppBoard.field[xCor][yCor] === 'hit') {
                const dot = document.createElement('div');
                dot.classList.add('dot');

                element.appendChild(dot);
            }
            element.classList.add('used-item');
            resolve();
        });
    }
}

module.exports = {
    Computer,
};
