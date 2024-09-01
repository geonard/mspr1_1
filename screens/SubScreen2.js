// screens/SubScreen1.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SubScreen2() {
  return (
    <View style={styles.container}>
      <Text>SubScreen1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
