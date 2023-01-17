//importamos el StyleSheet
import { StyleSheet } from "react-native";

//exportamos todos los estilos.
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
  
  