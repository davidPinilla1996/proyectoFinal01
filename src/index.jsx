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
  //creamos un estado donde me permita hacer visible o no el modal
                                              //inicializamos el useste el falso por que el modal inicialmente no se va a ver.
  const [isModalVisible, setIsModalVisible] = useState(false);
  //creamos un estado de seleccion de datos y inicializamos el useState como null por que por default la tarea no va a estar seleccionada
  const [selectedTask, setSelectedTask] = useState(null);
   //creo una funcion que recibe el texto que contiene el campo del AddItem 
  const onHandlerChange = (text) => {
    //Le asigno ese valor de text a la funcion de setTask del useState.(setiamos el texto)
    setTask(text)
  }
// me permite guardar la tarea
  const onHandlerSubmit = (opcion) => {
    //setiamos la lista de tareas
    setTasks([
      //hacemos una copia de la lista de tareas anteriores por que podria estar llena la lista
      ...tasks,
      //añadimos un objeto para que las tareas que vamos a agregar sean un objeto
      {
        //las tareas van a tener un id con un numero aleatorio con Math.random().toString(),
        // utilizamos un id con un numero aleatorio para poder guardar esa tarea y asigarle un id
        id: Math.random().toString(),
        //Este es el valor de la tarea que va a ser la tarea que yo escriba o cree dentro del campo del AddItem
        value: task
      }
    ]);
    //vaciamos la tarea luego de darle click al boton de agregar tarea para poder crear una nueva.
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
                              //llamamos a la funcion onHandlerSubmit
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