import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  checkBox: {
     fontSize: 18
  },
  itemList: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10
  },
  containerHijo: {
    flexDirection: 'row',
    marginLeft: 15,
  }
})