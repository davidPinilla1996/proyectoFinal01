import React from 'react'
import { TouchableOpacity, Text, View} from 'react-native';
import { styles } from "./styles";
import {useState} from 'react';
import { useFonts } from "expo-font";

const TaskItem = ({ item, onHandlerModal }) => {

 const[ datoGuadadoCheck, setDatoGuardadoCheck ]= useState("☑️");

 const FuncionQUeCambiaSegun = () => {
    if (datoGuadadoCheck === "☑️") {
      setDatoGuardadoCheck("❌")
    }else{
      setDatoGuardadoCheck("☑️")
    }
 }

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
          <TouchableOpacity onPress={() => FuncionQUeCambiaSegun()}>
             <View style={styles.containerHijo}>
                <Text style={styles.checkBox}>{datoGuadadoCheck}</Text>
                <Text style={styles.itemList}>{item.value}</Text>
             </View>
          </TouchableOpacity>
    </TouchableOpacity>
    )
}

export default TaskItem;