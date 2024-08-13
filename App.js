import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You pressed {count} times</Text>
      <Button title="Press me" onPress={handlePress}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    color: "#333",
    marginBottom: 20,
  },
});
