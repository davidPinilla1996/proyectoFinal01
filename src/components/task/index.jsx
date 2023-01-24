import React from "react";
//importamos el FlatList
import { FlatList } from "react-native";
import TaskItem from "./item";
import { styles } from "./styles";

const TaskList = ({ tasks, onHandlerModal}) => {
    //este renderItem destructura cada uno de los elementos de la lista
    const renderItem = ({ item }) => (
        <TaskItem 
            item={item}
            onHandlerModal={onHandlerModal}
        />
      )
  //setiamos o extraemos ese id de nuestra lista
    const keyExtractor = (item) => item.id;

    return (
      //El FlatList tiene 3 propiedades los datos de las tareas(tasks),  
        <FlatList 
        data={tasks}
        //colocamos la funcion de renderItem dentro del FlatList en el renderItem que es el que se va a renderizar
        renderItem={renderItem}
        //colocamos la funcion del keyExtractor dentro del FlatList y en el keyExtractor
        keyExtractor={keyExtractor}
        //estilizamos en FlatList
        style={styles.listContainer}
      />
    )
}
export default TaskList;