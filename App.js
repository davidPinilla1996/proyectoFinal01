import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
const [task, setTask] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput 
      style={styles.input} 
      autoComplete="off"
      autoCorrect={false}
      autoCapitalize="none"
      placeholder="hola mundo wrold" 
      value="task"
      />
      <Button title="Add" color="#145C9E"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 50,
    marginHorizontal: 20,
  },
  input: {
   width: "75%",
   borderBottomColor: "#145C9E",
   borderBottomWidth: 1,
   height: 40,
   color: "#161E22"
  }
});
