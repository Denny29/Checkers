import Tile from "./tile.js";
import Piece from "./piece.js";
let gameBoard = [];

export default function board() {
  return (
    <div id="board">
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
        <Tile color="black" />
        <Tile color="red" />
        <Tile color="black" />
        <Tile color="red" />
        <Tile color="black" />
        <Tile color="red" />
        <Tile color="black" />
        <Tile color="red" />
      </div>
    </div>
  );
}
