import React from 'react';
import PropTypes from 'prop-types';
import { Image, Button, Text, View, StyleSheet } from 'react-native';
import { emptyCell, numOfColumns, numOfRows, p1disc, p2disc, playerDiscLookup } from './constants';
// Discs from http://fontawesome.io/icon/circle/
import WhiteDisc from '../../../assets/images/circular-shape-silhouette-white.png';
import BlueDisc from '../../../assets/images/circular-shape-silhouette-blue.png';
import RedDisc from '../../../assets/images/circular-shape-silhouette-red.png';

const ConnectFourBoard = ({
  ctx,
  moves,
  events,
  G,
}) => {
  const onClick = (columnIdx) => {
    if (isActiveCheck(columnIdx)) {
      moves.selectColumn(columnIdx);
      events.endTurn();
    }
  }

  const isActiveCheck = (columnIdx) => {
    if (ctx.gameover) return false;
    // If the top row of a column is not empty, we shouldn't allow another disc.
    if (G.grid[0][columnIdx] !== emptyCell) return false;
    return true;
  }

  return (
    <View>
      <Text>Connect Four</Text>
      <View>
        {ctx.gameover
          ? <Text>Winner: Player {playerDiscLookup[ctx.currentPlayer]}</Text>
          : <Text>Current Player: Player {playerDiscLookup[ctx.currentPlayer]}</Text>}
      </View>
      <View style={{ flexDirection: 'row' }}>
        {Array(numOfColumns).fill().map((_, i) => i).map(idx =>
          <ColumnSelector
            active={isActiveCheck(idx)}
            handleClick={() => onClick(idx)}
            key={idx}
          />
        )}
      </View>
      <Grid grid={G.grid} />
    </View>
  );
}

// TODO: Remove this, make columns touchable opacities
const ColumnSelector = ({ active, handleClick }) => {
  return (
    <View style={styles.columnSelectorContainer}>
      <Button disabled={!active} onClick={handleClick} style={styles.columnSelector} title="O" />
    </View>
  );
}

const Grid = ({ grid }) => {
  let rows = [];
  for (let rowIdx = 0; rowIdx < numOfRows; rowIdx++) {
    rows = rows.concat(
      <View key={rowIdx}>
        <Row row={grid[rowIdx]} />
      </View>
    );
  }
  return rows;
}

const Row = ({ row }) => row.map((c, idx) => <Cell cell={c} key={idx} />);

const Cell = ({ cell }) => {
  let cellImage;
  switch (cell) {
    case p1disc:
      cellImage = RedDisc;
      break;
    case p2disc:
      cellImage = BlueDisc;
      break;
    default:
      cellImage = WhiteDisc;
      break;
  }
  return (
    <Image
      source={cellImage}
      style={styles.disc}
    />
  );
}

ConnectFourBoard.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
  playerID: PropTypes.string,
  isActive: PropTypes.bool,
  isMultiplayer: PropTypes.bool,
  isConnected: PropTypes.bool,
};

const styles = StyleSheet.create({
  columnSelector: {
    width: 50,
  },
  columnSelectorContainer: {
    padding: 5,
  },
  disc: {
    width: 50,
    height: 50,
    padding: 5,
  }
});

export default ConnectFourBoard;
