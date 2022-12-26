import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { StyledButton } from '../components/StyledButton';
import { RootStackScreenProps } from '../types';

const gameObj = {
  'tictactoe': 'Tic-Tac-Toe',
  'connectfour': 'Connect Four',
};

export default function StartScreen({ navigation }: RootStackScreenProps<'Start'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, choose a game here</Text>
      {Object.entries(gameObj).map(([gameKey, gameName]) => (
        <View style={styles.content} key={gameName}>
          <StyledButton
            onPress={() => navigation.push('Root', { gameKey, gameName })}
            text={gameName}
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
