/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

const IsVictory = (cells) => {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const isRowComplete = (row) => {
    const symbols = row.map((i) => cells[i]);
    return symbols.every((i) => i !== null && i === symbols[0]);
  };

  return positions.map(isRowComplete).some((i) => i === true);
}

export const TicTacToe = {
  name: 'tic-tac-toe',
  setup: () => ({
    cells: new Array(9).fill(null),
  }),
  moves: {
    clickCell({ G, playerID }, id) {
      const cells = [...G.cells];
      if (cells[id] === null) {
        cells[id] = playerID;
      }
      return { ...G, cells };
    },
  },
  turn: {
    minMoves: 1,
    maxMoves: 1,
  },
  endIf: ({ G, ctx }) => {
    if (IsVictory(G.cells)) {
      return ctx.currentPlayer;
    }
    const isDraw = G.cells.filter((c) => c === null).length == 0;
    if (isDraw) {
      return { draw: true };
    }
  },
};

export default TicTacToe;
