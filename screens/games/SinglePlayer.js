import { Image, StyleSheet, View } from 'react-native';
import { Client } from 'boardgame.io/react-native';

import logo from '../../assets/images/logo.png';
import TicTacToe from './tictactoe';
import TicTacToeBoard from './tictactoe/board';
import ConnectFour from './connectfour';
import ConnectFourBoard from './connectfour/board';
import { StyledButton } from '../../components/StyledButton';

const TicTacView = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
});

const ConnectFourView = Client({
  game: ConnectFour,
  board: ConnectFourBoard,
});

const SinglePlayer = ({ gameKey }) => {
  return (
    <View style={styles.container}>
      {gameKey === "tictactoe" && (
        <>
          <Image source={logo} style={styles.logo} />
          <TicTacView playerID="0" matchID="single" />
        </>
      )}
      {gameKey === "connectfour" && <ConnectFourView matchID="single" />}
    </View>
  )
};

export default SinglePlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
