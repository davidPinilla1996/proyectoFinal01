import React, { useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { styles } from './styles';
import { AddItem, CustomModal, TaskList} from './components';
import { colors } from './constants/theme/colors';


const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text)
  }

  const onHandlerSubmit = (opcion) => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);
    setTask('');
  }

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
  }
  
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
     <ImageBackground source={(require("./imagenes/pantalla.jpg"))} style={styles.image}>
          <View style={styles.textoContainer}>
              <Text 
                 style={styles.textoPrincipal}>
                 LISTA DE TAREAS
              </Text>
          </View>
         <AddItem
           buttonColor={colors.primary}
           buttonText='Agregar tarea'
           onHandlerChange={onHandlerChange}
           onHandlerSubmit={onHandlerSubmit}
           placeholder='Escribe tu tarea'
           task={task}
           />
         <TaskList
           tasks={tasks}
           onHandlerModal={onHandlerModal}
           />
         <CustomModal 
            isModalVisible={isModalVisible}
            onHandleCancel={onHandleCancel}
            onHandleDelete={onHandleDelete}
            selectedTask={selectedTask}
        />
     </ImageBackground>
  </View>
  );
}


export default App;