import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function AboutScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>AboutScreen</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
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
