import { Image, StyleSheet, View } from 'react-native';
import { Client } from 'boardgame.io/react-native';
import { SocketIO, Local } from 'boardgame.io/multiplayer';

import logo from '../../assets/images/logo.png';
import TicTacToe from './tictactoe';
import TicTacToeBoard from './tictactoe/board';
import ConnectFour from './connectfour';
import ConnectFourBoard from './connectfour/board';
import { StyledButton } from '../../components/StyledButton';

const TicTacView = Client({
  game: TicTacToe,
  numPlayers: 2,
  board: TicTacToeBoard,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
  debug: true
});

const ConnectFourView = Client({
  game: ConnectFour,
  board: ConnectFourBoard,
});

const MultiPlayer = ({ gameKey }) => {
  return (
    <View style={styles.container}>
      {gameKey === "tictactoe" && (
        <>
          <TicTacView playerID="0" matchID="multi" />
          <TicTacView playerID="1" matchID="multi" />
        </>
      )}
      {gameKey === "connectfour" && <ConnectFourView matchID="single" />}
    </View>
  )
};

export default MultiPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 90,
    marginBottom: 24,
  },
});
