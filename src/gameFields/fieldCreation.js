import { Ship } from '../ships';

export default class FieldCreation {
    static makeField(thisBoard, thisField, i, j, shipsContainer) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        if (thisField[i][j] instanceof Ship) {
            const ship = thisField[i][j];

            let knownVessel = shipsContainer.find(
                (container) => container.vessel === ship
            );

            if (!knownVessel) {
                knownVessel = {
                    vessel: ship,
                    container: document.createElement('div'),
                };

                knownVessel.container.classList.add('overlay');

                const { shipImage } = ship;

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

            thisBoard.append(knownVessel.container);
        }
        thisBoard.append(gridItem);
    }

    static renderBoard(fieldElement, field) {
        const shipsContainer = [];

        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field[i].length; j++) {
                FieldCreation.makeField(
                    fieldElement,
                    field,
                    i,
                    j,
                    shipsContainer
                );
            }
        }
    }
}
