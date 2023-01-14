import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Text} from 'react-native'



export default  function App () {
const [task,setTask] = useState("")
const [tasks,setTasks] = useState([])

   const onHandlerChange = (text) => {
    setTask(text)
   }

   const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random() .toString(),
        value: task
      }
    ]);
    setTask("");
   }

   console.warn("tasks", tasks);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
          <TextInput  
          style={styles.input} 
          placeholder="Escribe algo" 
          value={task}
          //el metodo de onchange me retorna el valor que se escribe dentro del campo
          onChangeText={onHandlerChange}
          />
          <Button disabled={!task} title='Click' color="#4e4e4e" onPress={onHandlerSubmit}/>
      </View>
          <View style={styles.listContainer}>
             {
              tasks.map((item) => (
                <View style={styles.itemContainer}>
                     <Text  style={styles.itemList} key={item.id}>{item.value}</Text>
                </View>
              ))
             }
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex 1 quiere decir que va a ocupar todo el espacio que tiene diponible el componente
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
    marginHorizontal: 20
  },
  input:{
     width: "75%",
     borderBottomColor: "#626893",
     borderBottomWidth: 1,
     height: 40,
     color: "#000"
  },
  listContainer : {
     marginHorizontal: 20,
     marginTop: 40
    },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#4e4e4e",
    marginBottom: 10,
    borderRadius: 10
    },
  itemList: {
      fontSize: 14,
      color: "#000",
      fontWeight: "bold"
    },
})