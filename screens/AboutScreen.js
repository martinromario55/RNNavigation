import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AboutScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
})
