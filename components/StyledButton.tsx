import * as React from 'react';

import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "./Themed";

export function StyledButton({
  onPress,
  text,
}: { onPress: () => void, text: string }) {
  return (
    <TouchableOpacity style={styles.buttonGame} onPress={onPress}>
      <Text style={styles.buttonGameText}>{text}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
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
