import React from 'react'
import { StyleSheet, View, Button, TextInput, Picker, Slider } from 'react-native'
import NumericInput from 'react-native-numeric-input'

class AddPlayer extends React.Component {
  state = {user: ''}
  updateUser = (user) => { this.setState({user: user}) }
  render(){
    return(
      <View style={ styles.main_container }>
        <TextInput style={ styles.textinput } placeholder="Nom du joueur"/>
        <NumericInput onChange={ value => console.log(value)} rounded minValue={0} maxValue={11} rightButtonBackgroundColor='#EA3788' leftButtonBackgroundColor='#EA3788'/>
        <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
          <Picker.Item label = "Gardien" value = "Gardien" />
          <Picker.Item label = "Défense" value = "Défense" />
          <Picker.Item label = "Milieu" value = "Milieu" />
          <Picker.Item label = "Attaquant" value = "Attaquant" />
        </Picker>
        <Button style={{ height: 50 }} title="Ajouter" onPress={() => {}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container:{
    marginTop: 30,
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default AddPlayer
