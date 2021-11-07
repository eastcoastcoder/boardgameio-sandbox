import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

// Uncomment connectfour when implemented
const gameObj = {
  'tictactoe': 'Tic-Tac-Toe',
  // 'connectfour': 'Connect Four',
};

export default function StartScreen({ navigation }: RootStackScreenProps<'Start'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, choose a game here</Text>
      {Object.entries(gameObj).map(([gameKey, gameName]) => (
        <View key={gameName}>
          <View style={styles.separator} />
          <Button
            onPress={() => navigation.push('Root', { gameKey, gameName })}
            title={gameName}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
