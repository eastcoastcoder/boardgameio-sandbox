import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import { StyledButton } from '../../../components/StyledButton';
import universalAlert from '../../../utils/universalAlert';

const Board = ({
  ctx,
  isMultiplayer,
  isConnected,
  G,
  moves,
  playerID,
  isActive,
  reset,
}) => {
  const numOfRows = 3;
  const numOfColumns = 3;
  let player = null;
  let disconnected = null;
  let winner = null;
  const tbody = [];
  const marker = {
    0: 'X',
    1: 'O',
  };

  if (!G) return <></>;

  for (let row = 0; row < numOfRows; row++) {
    const cells = [];
    for (let col = 0; col < numOfColumns; col++) {
      const id = 3 * row + col;
      cells.push(
        <TouchableHighlight
          key={id}
          onPress={() => onClick(id)}
          style={[styles.cell, styles[`cell${id}`]]}
          underlayColor="transparent"
        >
          <Text style={styles.value}>{marker[G.cells[id]]}</Text>
        </TouchableHighlight>
      );
    }
    tbody.push(
      <View key={row} style={styles.row}>
        {cells}
      </View>
    );
  }

  const onClick = (id) => {
    if (isActiveCheck(id)) {
      moves.clickCell(id);
    }
  };

  const isActiveCheck = (id) => {
    if (!isActive) return false;
    if (G.cells[id] !== null) return false;
    return true;
  }

  const handleSharePressed = () => {
    universalAlert('Share Your Game', 'Your unique code is:\n0xDEADBEEF\n\nTell your friends to join with this code!', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ])
  };


  return (
    <View>
      <View id="board">{tbody}</View>
      <View style={styles.info}>
        {!ctx.gameover && <Text>{`Player ${Number(ctx.currentPlayer) + 1}'s Turn`}</Text>}
        {playerID !== null && (
          <Text id="player" style={styles.infoText}>
            Player: {Number(playerID) + 1}
          </Text>
        )}
        {ctx.gameover !== undefined && (
          <Text id="winner" style={styles.infoText}>
            Winner: {marker[ctx.gameover]}
          </Text>
        )}
        {isMultiplayer && !isConnected && (
          <Text id="disconnected" style={styles.infoText}>
            Disconnected!
          </Text>
        )}
      </View>
      <StyledButton onPress={reset} text="Restart Game" />
      <StyledButton onPress={handleSharePressed} text="Share Game" />
    </View>
  );
}

Board.propTypes = {
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
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 96,
    height: 96,
    borderWidth: 4,
    borderColor: '#666',
    borderStyle: 'solid',
  },
  value: {
    fontSize: 48,
    fontWeight: '700',
    color: '#373748',
  },
  cell0: {
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
  },
  cell1: {
    borderTopColor: 'transparent',
  },
  cell2: {
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
  },
  cell3: {
    borderLeftColor: 'transparent',
  },
  cell5: {
    borderRightColor: 'transparent',
  },
  cell6: {
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  cell7: {
    borderBottomColor: 'transparent',
  },
  cell8: {
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderStyle: 'solid',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 24,
  },
  infoText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#373748',
  },
});

export default Board;
