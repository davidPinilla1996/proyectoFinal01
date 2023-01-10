import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="hola mundo wrold" />
      <Button title="Add" color="#145C9E"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 50,
    marginHorizontal: 20,
  },
  input: {
   width: "75%",
   borderBottomColor: "#145C9E",
   borderBottomWidth: 1,
   height: 40,
   color: "#161E22"
  }
});
