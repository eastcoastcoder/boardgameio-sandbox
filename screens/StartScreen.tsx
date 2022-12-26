import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { StyledButton } from '../components/StyledButton';
import { RootStackScreenProps } from '../types';

const gameArr = [
  {
    'gameKey': 'tictactoe',
    'gameName': 'Tic-Tac-Toe',
    'playerID': 0,
  },
  {
    'gameKey': 'tictactoe',
    'gameName': 'Tic-Tac-Toe',
    'playerID': 1,
  },
  {
    'gameKey': 'connectfour',
    'gameName': 'Connect Four',
    'playerID': 0,
  },
];

export default function StartScreen({ navigation }: RootStackScreenProps<'Start'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, choose a game here</Text>
      {gameArr.map(({ gameKey, gameName, playerID }) => (
        <View style={styles.content} key={`${gameName} - ${playerID}`}>
          <StyledButton
            onPress={() => navigation.push('Root', { gameKey, gameName, playerID: String(playerID) })}
            text={`${gameName} - Player ${playerID + 1}`}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
