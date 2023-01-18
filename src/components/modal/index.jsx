import React from "react";
import { Modal, View, Text, Button } from 'react-native'
import { styles } from "./styles";

const CustomModal = ({ isModalVisible, selectedTask, onHandleCancel, onHandleDelete,onHandleTacha}) => {
    return (
        <Modal visible={isModalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Tarea detallada</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
            <Text style={styles.modalDetailMessage}>Que deseas hacer?</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
              title='Cancelar'
              color='#626893'
              onPress={onHandleCancel}
            />
            <Button
              title='Borrar'
              color='red'
              onPress={onHandleDelete}
            />
          </View>
        </View>
      </Modal>
    )
}

export default CustomModal;