const { FieldCreation } = require('../src/gameFields/fieldCreation');
const prompt = require('prompt-sync')();
const { GameBoard } = require('./gameBoard');
const { Ship } = require('./ships');

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerField = new GameBoard();
        this.opponentBoard = null;
        this.ships = [
            new Ship(2),
            new Ship(3),
            new Ship(3),
            new Ship(4),
            new Ship(5),
        ];
    }

    set targetField(board) {
        this.opponentBoard = board;
    }

    async getUserInput() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    prompt(
                        'Enter coordinates for the next ship (e.g., xCor yCor): '
                    )
                );
            }, 0);
        });
    }

    hoverPlacement(element) {
        const { x, y } = element.dataset;
        let targetX = parseInt(x);
        let targetY = parseInt(y);
        const { length: shipLength } = this.ships[this.ships.length - 1];

        if (
            !this.playerField.isSpaceAvailable(
                targetX,
                targetY,
                this.ships[this.ships.length - 1],
                this.ships[this.ships.length - 1].axis
            )
        ) {
            element.classList.add('bad-placement');
            return;
        }

        if (!this.ships[this.ships.length - 1].axis) {
            for (let i = 0; i < shipLength; i++) {
                const nextItem = document.querySelector(
                    `.shipPlacementBoard .grid-item[data-x='${targetX}'][data-y='${
                        targetY + i
                    }']`
                );

                nextItem.classList.add('good-placement');
            }
        } else {
            for (let i = 0; i < shipLength; i++) {
                const nextItem = document.querySelector(
                    `.shipPlacementBoard .grid-item[data-x='${
                        targetX + i
                    }'][data-y='${targetY}']`
                );

                nextItem.classList.add('good-placement');
            }
        }
    }

    hoverPlacementRemove() {
        const hoveredItems = document.querySelectorAll(
            '.good-placement, .bad-placement'
        );

        hoveredItems.forEach((element) => {
            element.classList.remove('good-placement', 'bad-placement');
        });
    }

    manualShipPlacement() {
        const gameFields = document.getElementById('gameFields');
        return new Promise((resolve) => {
            const axisButton = document.createElement('button');
            axisButton.classList.add('axis-button');
            axisButton.innerHTML = 'Axis: X';

            axisButton.addEventListener('click', () => {
                axisButton.innerHTML =
                    axisButton.innerHTML === 'Axis: X' ? 'Axis: Y' : 'Axis: X';

                const currentShip = this.ships[this.ships.length - 1];
                currentShip.axis =
                    axisButton.innerHTML === 'Axis: Y' ? true : null;
            });

            const shipPlacementBoard = document.createElement('div');
            shipPlacementBoard.classList.add('shipPlacementBoard');
            shipPlacementBoard.style.display = 'grid';

            FieldCreation.renderBoard(
                shipPlacementBoard,
                this.playerField.field
            );

            this.sampleGridEventListeners(shipPlacementBoard, resolve);

            gameFields.append(axisButton);
            gameFields.append(shipPlacementBoard);
        });
    }

    screenCleanUp() {
        const shipPlacementBoard = document.querySelector(
            '.shipPlacementBoard'
        );
        const axisButton = document.querySelector('.axis-button');

        shipPlacementBoard.remove();
        axisButton.remove();
    }

    sampleGridEventListeners(grid, resolve) {
        grid.querySelectorAll('.grid-item').forEach((gridItem) => {
            gridItem.addEventListener('mouseover', () =>
                this.hoverPlacement(gridItem)
            );
            gridItem.addEventListener('mouseout', () =>
                this.hoverPlacementRemove(gridItem)
            );
            gridItem.addEventListener('click', () => {
                if (
                    !this.playerField.placeShip(
                        parseInt(gridItem.dataset.x, 10),
                        parseInt(gridItem.dataset.y, 10),
                        this.ships[this.ships.length - 1],
                        this.ships[this.ships.length - 1].axis
                    )
                )
                    return;
                this.ships.pop();
                this.hoverPlacementRemove(gridItem);
                grid.innerHTML = '';
                FieldCreation.renderBoard(grid, this.playerField.field);
                if (this.ships.length === 0) {
                    this.screenCleanUp();
                    resolve();
                } else {
                    const axisButton = document.querySelector('.axis-button');
                    axisButton.innerHTML = 'Axis: X';
                    this.sampleGridEventListeners(grid, resolve);
                    this.hoverPlacement(gridItem);
                }
            });
        });
    }

    async placeShip() {
        for (let shipCount = 0; shipCount < 5; shipCount++) {
            const ship = this.ships.pop();

            try {
                // eslint-disable-next-line no-await-in-loop
                const values = await this.getUserInput();
                const [xCor, yCor] = values.trim().split(' ').map(Number);

                if (this.playerField.placeShip(xCor, yCor, ship)) {
                    console.log('Ship placed successfully!');
                } else {
                    this.ships.push(ship);
                    console.error('Could not place ship');
                    shipCount--; // Retry placing the same ship
                }
            } catch (error) {
                this.ships.push(ship);
                console.error('Invalid input. Please enter valid coordinates.');
                shipCount--; // Retry placing the same ship
            }
        }

        return this.playerField;
    }

    randomPlaceShip() {
        while (this.ships.length) {
            const randomIndex =
                this.ships[Math.floor(Math.random() * this.ships.length)];
            const randomShip = this.ships.splice(randomIndex, 1)[0];
            try {
                const xCor = Math.floor(Math.random() * 10);
                const yCor = Math.floor(Math.random() * 10);
                const axis = Math.floor(Math.random() * 10) > 4;

                if (this.playerField.placeShip(xCor, yCor, randomShip, axis)) {
                    console.log('Ship placed successfully!');
                } else {
                    this.ships.push(randomShip);
                    console.log('Could not place ship');
                }
            } catch (error) {
                this.ships.push(randomShip);
                console.log('Could not place ship');
            }
        }

        return this.playerField;
    }
}

module.exports = {
    Player,
};
