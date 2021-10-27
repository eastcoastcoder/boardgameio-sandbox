import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Client } from 'boardgame.io/react-native';

import logo from '../../assets/images/logo.png';
import TicTacToe from './game';
import Board from './board';

const TicTacView = Client({
  game: TicTacToe,
  board: Board,
});

const Singleplayer = () => (
  <View style={styles.container}>
    <Image source={logo} style={styles.logo} />
    <TicTacView matchID="single" />
  </View>
);

export default Singleplayer;

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
