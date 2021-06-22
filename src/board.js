import Tile from "./tile.js";
import Piece from "./piece.js";
let gameBoard = [
  <Piece piece="WP" />,
  <Piece piece="WP" />,
  <Piece piece="WP" />,
  <Piece piece="WP" />,
  <Piece piece="WP" />,
  <Piece piece="WP" />,
  <Piece piece="WP" />,
  <Piece piece="WP" />,
  <Piece piece="WP" />,
  <Piece piece="WP" />,
  <Piece piece="WP" />,
  <Piece piece="WP" />,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  <Piece piece="BP" />,
  <Piece piece="BP" />,
  <Piece piece="BP" />,
  <Piece piece="BP" />,
  <Piece piece="BP" />,
  <Piece piece="BP" />,
  <Piece piece="BP" />,
  <Piece piece="BP" />,
  <Piece piece="BP" />,
  <Piece piece="BP" />,
  <Piece piece="BP" />,
  <Piece piece="BP" />
];

export default function board() {
  return (
    <div id="board">
      <div class="row">
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[0]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[1]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[2]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[3]} />
      </div>
      <div class="row">
        <Tile color="black" piece={gameBoard[4]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[5]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[6]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[7]} />
        <Tile color="red" />
      </div>
      <div class="row">
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[8]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[9]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[10]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[11]} />
      </div>
      <div class="row">
        <Tile color="black" />
        <Tile color="red" />
        <Tile color="black" />
        <Tile color="red" />
        <Tile color="black" />
        <Tile color="red" />
        <Tile color="black" />
        <Tile color="red" />
      </div>
      <div class="row">
        <Tile color="red" />
        <Tile color="black" />
        <Tile color="red" />
        <Tile color="black" />
        <Tile color="red" />
        <Tile color="black" />
        <Tile color="red" />
        <Tile color="black" />
      </div>
      <div class="row">
        <Tile color="black" piece={gameBoard[20]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[21]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[22]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[23]} />
        <Tile color="red" />
      </div>
      <div class="row">
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[24]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[25]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[26]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[27]} />
      </div>
      <div class="row">
        <Tile color="black" piece={gameBoard[28]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[29]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[30]} />
        <Tile color="red" />
        <Tile color="black" piece={gameBoard[31]} />
        <Tile color="red" />
      </div>
    </div>
  );
}
