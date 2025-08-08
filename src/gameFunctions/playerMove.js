import Ship from '../ships.js';

class PlayerMove {
    static async move(oppBoard) {
        const computerField = document.getElementById('computerField');

        return new Promise((resolve) => {
            const clickHandler = (event) => {
                const { target } = event;

                if (target.classList.contains('used-item')) {
                    return;
                    // Does nothing for the items already containing 'used-item'
                }

                if (event.target.classList.contains('grid-item')) {
                    const rowIndex = parseInt(target.dataset.x, 10);
                    const colIndex = parseInt(target.dataset.y, 10);

                    // Makes the computer ship's visible if they are sunk
                    const selectedElement = oppBoard.field[rowIndex][colIndex];
                    if (selectedElement instanceof Ship) {
                        selectedElement.hit();
                        if (selectedElement.isSunk()) {
                            const { shipId } = selectedElement;
                            const displayShip = computerField.querySelector(
                                `.overlay[data-ship-id="${shipId}"]`
                            );

                            displayShip.style.display = 'revert';
                        } else selectedElement.removeTestShot();
                    }

                    oppBoard.receiveAttack(rowIndex, colIndex);

                    const dot = document.createElement('div');
                    dot.classList.add(
                        `shot-${oppBoard.field[rowIndex][colIndex]}`
                    );
                    target.appendChild(dot);

                    target.classList.add('used-item');
                    computerField.removeEventListener('click', clickHandler);

                    const hitTarget =
                        `${oppBoard.field[rowIndex][colIndex]}` === 'hit';

                    resolve(hitTarget);
                }
            };
            computerField.addEventListener('click', clickHandler);
        });
    }
}

export default PlayerMove;
