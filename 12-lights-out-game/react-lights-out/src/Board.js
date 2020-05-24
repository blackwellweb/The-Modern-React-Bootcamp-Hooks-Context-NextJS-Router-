import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows: 5,
    ncols: 5,
  }

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    const randomBoolean = [true, false]

    // TODO: create array-of-arrays of true/false values

    // Don’t think this is the best way of doing it but I couldn’t get it to work any other way
    // This will build a two-dimensional array for our board
    for (let i = 0; i < this.props.nrows; i++) {
      board.push([]);
    }
    board.forEach((item) => {
      for (let i = 0; i < this.props.ncols; i++) {
        item.push(randomBoolean[Math.floor(Math.random() * randomBoolean.length)]);
      }
    });

    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    // this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {


    let renderBoard = this.state.board.map(row => (
      <tr>
        {row.map(col =>
        <Cell isLit={col} />
      )}
      </tr>
    ))

    return (
      <div className="Board">
        <table>
          <tbody>
            {renderBoard}
          </tbody>
        </table>
      </div>
    );

    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}


export default Board;
