//importamos el useState 
import React, { useState } from 'react';
//importamos los comoponentes
import { View, ImageBackground, Text } from 'react-native';
import { styles } from './styles';
import { AddItem, CustomModal, TaskList} from './components';
import { colors } from './constants/theme/colors';


const App = () => {
  //Inicializamos los estados.
                        //Inicializamos el useState como un estado vacio 
                        //por que inicalmente el campo del AddItem o del formulario va a estar vacio.
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
   //creo una funcion que recibe el texto que contiene el campo del AddItem 
  const onHandlerChange = (text) => {
    //Le asigno ese valor de text a la funcion de setTask del useState.
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
             //Texto que se mostrará en los botones.
             buttonText='Agregar tarea'
             //Llamamos a la funcion onHandlerChange
             onHandlerChange={onHandlerChange}
             onHandlerSubmit={onHandlerSubmit}
             //para que se vea lo que vamos a tener que llenar dentro del campo.
             placeholder='Escribe tu tarea'
            //El valor que ahora se conoce como task del useState lo asiganmos como valor por defecto del campo del AddItem o formulario.
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