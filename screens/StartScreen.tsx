import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

// Uncomment connectfour when implemented
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
          <TouchableOpacity style={styles.buttonGame} onPress={() => navigation.push('Root', { gameKey, gameName })}>
            <Text style={styles.buttonGameText}>{gameName}</Text>
          </TouchableOpacity>
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
  buttonGame: {
    marginTop: 20,
    backgroundColor: "#2980b9",
    padding: 15,
    borderRadius: 15,
  },
  buttonGameText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
