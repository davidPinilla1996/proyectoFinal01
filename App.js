//importando el useState desde react
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  //inicializando el estado importado desde react
const [task, setTask] = useState("");

const onHandlerChange = (text) => {
  setTask(text)
}

console.warn("task",task)

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
      onChangeText={onHandlerChange}
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
