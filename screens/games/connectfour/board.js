import PropTypes from 'prop-types';
import { Image, Button, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { emptyCell, numOfColumns, numOfRows, p1disc, p2disc, playerDiscLookup } from './constants';
// Discs from http://fontawesome.io/icon/circle/
import WhiteDisc from '../../../assets/images/circular-shape-silhouette-white.png';
import BlueDisc from '../../../assets/images/circular-shape-silhouette-blue.png';
import RedDisc from '../../../assets/images/circular-shape-silhouette-red.png';
import { StyledButton } from '../../../components/StyledButton';

const ConnectFourBoard = ({
  ctx,
  moves,
  events,
  G,
  reset,
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
      <Grid handleClick={onClick} grid={G.grid} />
      <StyledButton onPress={() => reset()} text="Restart Game" />
    </View>
  );
}

const Grid = ({ grid, handleClick }) => {
  const cells = [];
  for (let row = 0; row < numOfRows; row++) {
    cells.push(
      <View style={styles.row} key={row}>
        {grid[row].map((c, idx) => <Cell id={idx} onClick={handleClick} cell={c} key={idx} />)}
      </View>
    );
  }
  return cells;
}

const Cell = ({ cell, onClick, id }) => {
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
    <TouchableHighlight
      onPress={() => onClick(id)}
      style={[styles.cell, styles[`cell${id}`]]}
      underlayColor="transparent"
    >
      <Image
        source={cellImage}
        style={styles.disc}
      />
    </TouchableHighlight>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disc: {
    width: 35,
    height: 35,
    padding: 5,
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderWidth: 4,
    borderColor: '#666',
    borderStyle: 'solid',
  },
});

export default ConnectFourBoard;
