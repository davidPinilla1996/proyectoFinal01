//importamos el useState desde react 
import React, { useState } from 'react';
//importamos varios componentes desde react
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal, TouchableOpacity} from 'react-native';



export default function App() {
  //inicializamos el useState.
  //Es una constante que tiene un array y dicha array contiene el primer elemento que seria el valor del estado y el segundo elemento que seria la funcion que se ocupa de actualizar el estado, lo igualamos a useState y podemos inicializar el estado con un valor.
  //un estado puede ser datos primarios, un objeto, una funcion, otro componente etc...  
                         //inicializamos el useState como un estado vacio por que el campo del formualrio esta vacio inicialmente.
  const [tarea, setTask] = useState('');
  const [tareas, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  //onHandlerChange recibe el texto que yo escriba dentro del campo.
  const onHandlerChange = (text) => {
    //setiando el valor como asignacion de mi estado.
    setTask(text)
  }

  const onHandlerSubmit = () => {
    setTasks([
      ...tareas,
      {
        id: Math.random().toString(),
        value: tarea
      }
    ]);
    setTask('');
  }

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
  }

  const renderItem = ({ item }) => (
    //                                             El onPress Controla que se llamará(que pasara) cuando el usuario toque el botón.
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
      <Text style={styles.itemList}>{item.value}</Text>
    </TouchableOpacity>
  )

  const keyExtractor = (item) => item.id;
  
  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandleDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder='add a new task' 
          autoComplete='off'
          autoCorrect={false}
          autoCapitalize='none'
          //el valor de useState que ahora conocemos como tarea lo vamos a asignar como valor por defecto del campo.
          //soncronisamos el useState tarea con el valor del campo por que eso nos va a permitir manejar el valor que esta en el campo,
          value={tarea}
          // el TextInput o los input tienen un metodo o un evento que se ejecuta al momento de nosotros modificar el campo que seria el onChange.
          // tenemos la posibilidad de acceder directamente al texto con el metodo de onChangeText.
          // el onChangeText me retorna el valor que yo e escrito dentro del campo.
          onChangeText={onHandlerChange}
        />
        <Button disabled={!tarea} title='Add' color='#626893' onPress={onHandlerSubmit} />
      </View>
      <FlatList 
        data={tareas}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
      <Modal visible={isModalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
              title='Cancel'
              color='#626893'
              onPress={onHandleCancel}
            />
            <Button
              title='Delete'
              color='red'
              onPress={onHandleDelete}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 20,
  },
  input: {
    width: '75%',
    borderBottomColor: '#626893',
    borderBottomWidth: 1,
    height: 40,
    color: '#212121'
  },
  listContainer: {
    marginHorizontal: 20,
    marginTop: 40
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#626893',
    marginBottom: 10,
    borderRadius: 10,
  },
  itemList: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetailContainer: {
    padddingVertical: 20,
  },
  modalDetailMessage: {
    fontSize: 14,
    color: '#212121'
  },
  selectedTask: {
    fontSize: 14,
    color: '#212121',
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtonContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  }
});