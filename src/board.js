import { useState } from "react";
import Tile from "./tile.js";
import Piece from "./piece.js";
let defaultBoard = [
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

export default function Board() {
  return (
    <div id="board">
      <div class="row">
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[0]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[1]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[2]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[3]} />
      </div>
      <div class="row">
        <Tile color="black" piece={defaultBoard[4]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[5]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[6]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[7]} />
        <Tile color="red" />
      </div>
      <div class="row">
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[8]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[9]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[10]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[11]} />
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
        <Tile color="black" piece={defaultBoard[20]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[21]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[22]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[23]} />
        <Tile color="red" />
      </div>
      <div class="row">
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[24]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[25]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[26]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[27]} />
      </div>
      <div class="row">
        <Tile color="black" piece={defaultBoard[28]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[29]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[30]} />
        <Tile color="red" />
        <Tile color="black" piece={defaultBoard[31]} />
        <Tile color="red" />
      </div>
    </div>
  );
}
