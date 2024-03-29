/*
 * Copyright 2019 PJohannessen
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { emptyCell, numOfRows, numOfColumns, playerDiscLookup } from './constants';

function IsVictory(grid, player) {
  const playerDisc = playerDiscLookup[player];

  // Victory algorithm by ferdelOlmo: https://stackoverflow.com/a/38211417/129967
  let rowIdx = 0;
  let columnIdx = 0;

  // horizontalCheck
  for (columnIdx = 0; columnIdx < numOfColumns - 3; columnIdx++) {
    for (rowIdx = 0; rowIdx < numOfRows; rowIdx++) {
      if (grid[rowIdx][columnIdx] === playerDisc && grid[rowIdx][columnIdx + 1] === playerDisc && grid[rowIdx][columnIdx + 2] === playerDisc && grid[rowIdx][columnIdx + 3] === playerDisc) {
        return true;
      }
    }
  }

  // verticalCheck
  for (rowIdx = 0; rowIdx < numOfRows - 3; rowIdx++) {
    for (columnIdx = 0; columnIdx < numOfColumns; columnIdx++) {
      if (grid[rowIdx][columnIdx] === playerDisc && grid[rowIdx + 1][columnIdx] === playerDisc && grid[rowIdx + 2][columnIdx] === playerDisc && grid[rowIdx + 3][columnIdx] === playerDisc) {
        return true;
      }
    }
  }

  // ascendingDiagonalCheck
  for (rowIdx = 3; rowIdx < numOfRows; rowIdx++) {
    for (columnIdx = 0; columnIdx < numOfColumns - 3; columnIdx++) {
      if (grid[rowIdx][columnIdx] === playerDisc && grid[rowIdx - 1][columnIdx + 1] === playerDisc && grid[rowIdx - 2][columnIdx + 2] === playerDisc && grid[rowIdx - 3][columnIdx + 3] === playerDisc) {
        return true;
      }
    }
  }

  // descendingDiagonalCheck
  for (rowIdx = 3; rowIdx < numOfRows; rowIdx++) {
    for (columnIdx = 3; columnIdx < numOfColumns; columnIdx++) {
      if (grid[rowIdx][columnIdx] === playerDisc && grid[rowIdx - 1][columnIdx - 1] === playerDisc && grid[rowIdx - 2][columnIdx - 2] === playerDisc && grid[rowIdx - 3][columnIdx - 3] === playerDisc) {
        return true;
      }
    }
  }

  return false;
}

const ConnectFour = {
  name: 'connect-four',
  setup: () => {
    const grid = {};
    for (var rowIdx = 0; rowIdx < numOfRows; rowIdx++) {
      grid[rowIdx] = Array(numOfColumns).fill(emptyCell);
    }
    return ({ grid: grid });
  },
  moves: {
    selectColumn({ G, ctx }, columnIdx) {
      for (var rowIdx = numOfRows - 1; rowIdx >= 0; rowIdx--) {
        if (G.grid[rowIdx][columnIdx] === emptyCell) {
          G.grid[rowIdx][columnIdx] = playerDiscLookup[ctx.currentPlayer];
          break;
        }
      }
    },
  },
  endIf: ({ G, ctx }) => {
    if (IsVictory(G.grid, ctx.currentPlayer)) {
      return { winner: ctx.currentPlayer };
    }
  },
};

export default ConnectFour;
