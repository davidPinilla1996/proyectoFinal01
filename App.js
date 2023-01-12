//importando el useState desde react
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  //inicializando el estado importado desde react
const [task, setTask] = useState("");
const[tasks, setTasks] = useState([]);

//creo un metodo que reciba el texto que contiene el campo 
const onHandlerChange = (text) => {
  //setienado el valor se asignacion como el de mi estado (setTask)
  setTask(text)
}

const onHandlerSubmit = () => {
  setTasks([
    ...task,
    {
      id: Math.random().toString(),
      value: task
    }
  ]);
  setTask("");
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
      value={task}
      //El onChangeText me retorna el valor que yo e escrito dentro del campo
      onChangeText={onHandlerChange}
      />
      <Button 
      disabled={!task}
      title="Add" 
      color="#145C9E"
      //el evento de onPress se ejecuta cada ves que se le da click en el boton en este caso
      onPress={onHandlerSubmit}
      />
      <View>
        {
          tasks.map((item) => (
             <Text key={item.id}>{item.vale}</Text>
          ))
        }
      </View>
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
