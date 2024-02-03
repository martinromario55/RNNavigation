import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function AboutScreen({ route }) {
  const { name } = route.params

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>AboutScreen {name}</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Update the name"
        onPress={() =>
          navigation.setParams({
            name: 'NoName',
          })
        }
      />
      <Button
        title="Go back with data"
        onPress={() =>
          navigation.navigate('Home', { result: 'Data from about' })
        }
      />
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
