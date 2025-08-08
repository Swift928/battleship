class ComputerMove {
    static async move(gameInstance, oppBoard) {
        const playerField = document.getElementById('playerField');
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve) => {
            const { xCor, yCor } = await gameInstance.computer.computerAttack();

            const targetElement = playerField.querySelector(
                `.grid-item[data-x='${xCor}'][data-y='${yCor}']`
            );

            const dot = document.createElement('div');
            dot.classList.add(`shot-${oppBoard.field[xCor][yCor]}`);
            targetElement.appendChild(dot);

            targetElement.classList.add('used-item');

            const hitTarget = `${oppBoard.field[xCor][yCor]}` === 'hit';
            resolve(hitTarget);
        });
    }
}

export default ComputerMove;
