import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity key={gameName} onPress={() => navigation.push('Root', { gameKey, gameName })} style={styles.link}>
          <Text style={styles.linkText}>{gameName}</Text>
        </TouchableOpacity>
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
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
