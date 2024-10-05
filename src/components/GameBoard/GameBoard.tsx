export default function GameBoard({
  onSelectSquare,
  board,
}: {
  onSelectSquare: any;
  board: any;
}) {
  /*const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handeSelectSquare(rowIndex: any, colIndex: any) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  }*/

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={col != null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
