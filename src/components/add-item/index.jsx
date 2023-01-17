import React from "react";
import { Button, TextInput, View } from "react-native";



const addItem = ({
    placeholder, 
    tarea, 
    onHandlerChange,
    buttonText,
    colorButton,
    onHandlerSubmit
    }) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder={placeholder}
          autoComplete='off'
          autoCorrect={false}
          autoCapitalize='none'
          //el valor de useState que ahora conocemos como tarea lo vamos a asignar como valor por defecto del campo.
          //soncronisamos el useState tarea con el valor del campo por que eso nos va a permitir manejar el valor que esta en el campo,
          value={tarea}
          // el TextInput o los input tienen un metodo o un evento que se ejecuta al momento de nosotros modificar el campo que seria el onChange.
          // tenemos la posibilidad de acceder directamente al texto con el metodo de onChangeText.
          // el onChangeText me retorna el valor que yo e escrito dentro del campo.
          onChangeText={onHandlerChange}
        />
        <Button 
        //Agragamos la propiedad disabled para cuando  mi tarea este vacia entonces este desabilitado el boton.
        disabled={!tarea} 
        title={buttonText} 
        color={colorButton} 
        //el boton tiene un evento o propiedad que ejecuta un evento a la hora de hacer click que se llama onPress.
        //cuando exista mi estado va a estar habilitado y cuando no exista mi estado entonces va a estar desabilitado.
        onPress={onHandlerSubmit} 
        />
      </View>
    )
}


export default addItem;