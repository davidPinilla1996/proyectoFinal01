import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
      image: {
        height: "100%",
      },
      modalContainer: {
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 30,
        top:150
      },
      modalTitle: {
        fontSize: 18,
        
        marginBottom: 10,
        fontSize: 30,
        color: "#686868"
      },
      modalDetailContainer: {
        padddingVertical: 20,
      },
      modalDetailMessage: {
        fontSize: 25,
        color: '#686868',
      },
      selectedTask: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: '#686868',
        borderRadius: 20,
        padding: 30
      },
      modalButtonContainer: {
        width: '65%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40,
      }
});