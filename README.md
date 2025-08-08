# battleship

**Battleship** is a classic strategy game implemented in JavaScript. This project was developed as part of *The Odin Project* curriculum. The game features a player vs. computer battle where each side tries to sink the opponent's fleet of ships.

## Technologies Used

* **JavaScript (ES6+):** Core game logic and DOM manipulation for rendering the game board and handling user interaction.
* **HTML5 and CSS3:** Structure and styling of the game interface. The layout uses CSS Grid for the game board and Tailwind CSS utility classes for styling.
* **Tailwind CSS:** A utility-first CSS framework used for styling components quickly.
* **Webpack:** Module bundler for building the project. It handles asset compilation (including Tailwind processing and image assets) and provides a development server.
* **Jest:** Testing framework used for unit tests of game logic (ships, gameboard, game loop, etc.).

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Swift928/battleship.git
   cd battleship
   ```

2. **Install dependencies:** This project uses Node.js and npm. Install the required packages by running:

   ```bash
   npm install
   ```

3. **Build or start the game:**

   * For development, start the Webpack dev server:

     ```bash
     npm start
     ```

     This will launch the game at **[http://localhost:3000](http://localhost:3000)** in your browser with hot-reloading.
   * To create a production build (outputs to the `dist/` folder):

     ```bash
     npm run build
     ```

4. **Run tests (optional):**
   If you'd like to run the unit tests, use:

   ```bash
   npm test
   ```

   This will execute the Jest test suites for game logic.

## How to Play

* Upon launching the game, enter your name when prompted. You will then place your ships on the grid. By default, the game opens in manual placement mode, where you can position your fleet: one battleship (5 cells), one cruiser (4 cells), two destroyers (3 cells each), and one patrol boat (2 cells).
* **Manual Ship Placement:** Click a ship from the sidebar (it will highlight), then click on the board to place it. You can toggle the placement orientation (horizontal/vertical) by clicking the "Axis" button (with the pan icon). Valid placements will be shown in **yellow**; invalid placements in **red**. Place all five ships on your board. You may use the "RANDOM" button to auto-place remaining ships, or "REFRESH" to start placement over.
* **Gameplay:** Once ships are placed, the battle begins. You target the enemy's grid (Computer Field) by clicking on a cell. A green highlight appears on hover to indicate a cell you can attack. After you click:

  * A **white dot** (`●`) will mark a miss, or a **red dot** will mark a hit.
  * If you hit and sink a computer's ship, the ship's icon will be revealed on the enemy grid.
    The computer will then take its turn, automatically targeting your grid. Hits and misses on your side are similarly marked, and your ships will remain visible. If the computer sinks one of your ships, it will remain visible (since you can always see your own fleet).
* Turns alternate for each miss; if a player scores a hit, they get to shoot again. The game continues until one side sinks all 5 ships of the opponent's fleet.

## Project Structure

The code is organized into modules for clarity:

* `src/ships.js` – Ship class logic (hit tracking, sunk status).
* `src/gameBoard.js` – GameBoard class managing the 10x10 grid, ship placement, and attack results.
* `src/player.js` and `src/computer.js` – Player classes. The Computer class extends Player with an AI for choosing moves.
* `src/gameFunctions/` – Game loop and supporting functions (handling turn logic, updating game status, player input, etc.).
* `src/gameFields/fieldCreation.js` – Helper to render the game board in the DOM.
* `src/index.js` – Entry point that initializes the game.

Assets like ship images and CSS (including Tailwind) are located in the `src/` directory and processed via Webpack.

## Contributing

Contributions are welcome! If you find bugs or have improvements:

* Fork the repository and create a feature branch.
* Make your changes, write or update tests as needed, and submit a pull request.
* Ensure `npm test` passes and that your code adheres to the style guidelines (Airbnb/Prettier configs are included for ESLint).

## License

This project is open source under the ISC License. See the `LICENSE` file for details.

## Acknowledgments

This game was built as a project for [The Odin Project](https://www.theodinproject.com). The 2D ship icons are by **andinur** on Flaticon (attribution for the 2-cell ship icon) – thank you for the asset. Enjoy playing Battleship!

