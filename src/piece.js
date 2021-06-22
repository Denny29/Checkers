import black_king from "./pieces/black_king.jpg";
import black_pawn from "./pieces/black_pawn.jpg";
import white_king from "./pieces/white_king.jpg";
import white_pawn from "./pieces/white_pawn.jpg";

let gamePiece;

export default function piece(props) {
  if (props.piece === "BK") {
    gamePiece = black_king;
  } else if (props.piece === "BP") {
    gamePiece = black_pawn;
  } else if (props.piece === "WK") {
    gamePiece = white_king;
  } else if (props.piece === "WP") {
    gamePiece = white_pawn;
  }
  return <img class="images" src={gamePiece} alt="cfsvd" />;
}
