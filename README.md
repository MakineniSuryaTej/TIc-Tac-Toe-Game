# React Tic-Tac-Toe Game

A modern, interactive Tic-Tac-Toe game built with React and TypeScript. This project showcases state management, component composition, and responsive design in a fun, classic game format.

## Features

- **Interactive Gameplay**: Two players can play against each other on the same device.
- **Dynamic Player Names**: Players can edit their names during the game.
- **Game State Tracking**: The game keeps track of all moves and displays them in a log.
- **Winning Detection**: Automatically detects and announces the winner or a draw.
- **Restart Functionality**: Players can restart the game at any time for a rematch.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Project Structure

The project is organized into several key components:

- `App.tsx`: The main component that orchestrates the game logic and state.
- `Header.tsx`: Displays the game title and logo.
- `Player.tsx`: Manages player information and name editing.
- `GameBoard.tsx`: Renders the game board and handles square selection.
- `GameOver.tsx`: Displays the game result and offers a restart option.
- `Log.tsx`: Shows a history of all moves made during the game.

## Technical Highlights

- **State Management**: Utilizes React's `useState` hook for efficient state management.
- **Derived State**: Implements functions like `deriveActivePlayer`, `deriveGameBoard`, and `deriveWinner` to calculate game state based on turns.
- **TypeScript Integration**: Enhances code reliability with type checking.
- **Component Composition**: Demonstrates effective use of React components for a modular design.
- **Conditional Rendering**: Employs conditional rendering for dynamic UI updates.

## Getting Started

1. Clone the repository:
   git clone https://github.com/MakineniSuryaTej/TIc-Tac-Toe-Game.git

2. Navigate to the project directory:
   cd react-tic-tac-toe

3. Install dependencies:
   npm install

4. Start the development server:
   npm start

5. Open [http://localhost:3000](http://localhost:3000) to view the game in your browser.

6. Or Open the Code Sandbox Link
   https://codesandbox.io/p/github/MakineniSuryaTej/TIc-Tac-Toe-Game
   Wait for few minutes to initialize and download the dependencies, then open the preview window.

## Future Enhancements

- Implement an AI opponent for single-player mode.
- Add sound effects for moves and game outcomes.
- Introduce different themes or color schemes for the game board.
- Create a leaderboard to track wins across multiple games.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
