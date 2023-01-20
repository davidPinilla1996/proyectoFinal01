import React from "react";
import { Modal, View, Text, Button, ImageBackground} from'react-native'
import { styles } from "./styles";

const CustomModal = ({ isModalVisible, selectedTask, onHandleCancel, onHandleDelete}) => {
  
    return (
  <Modal visible={isModalVisible} animationType='slide'>
    <ImageBackground source={(require("../../imagenes/pantalla.jpg"))} style={styles.image}>
      <View style={styles.modalContainer}>
            <Text 
              style={styles.modalTitle}
            >
              Seleccionaste la tarea
            </Text>
            <View 
               style={styles.modalDetailContainer}
            >
                 <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
                 <Text style={styles.modalDetailMessage}>Que deseas hacer?</Text>
            </View>
          <View style={styles.modalButtonContainer}>
              <Button 
                 title='Cancelar'
                 color='#686868'
                 onPress={onHandleCancel}
              />
              <Button
                 title='Borrar'
                 color='red'
                 onPress={onHandleDelete}
              />
          </View>
       </View>
    </ImageBackground>  
   </Modal>
    )
}

export default CustomModal;