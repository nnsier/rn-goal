import React from 'react';
import { View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const Input = props => {
  return(
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer} >
        <TextInput placeholder={props.placeHolder} style={styles.input} 
          onChangeText={props.inputHandler}
          value={props.value}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title={props.title} onPress={props.buttonHandler}/> 
          </View>
          <View style={styles.button}>
            <Button color="red" title="Cancel" onPress={props.cancelHandler} /> 
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({     
  inputContainer: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  input: { 
    width: '80%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10,
    marginBottom: 10, 
},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '40%',
  }})

export default Input;