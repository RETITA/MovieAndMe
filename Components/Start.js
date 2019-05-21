import React from 'react'
import { StyleSheet, View, Button, TextInput, Picker } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import { Platform } from "react-native"
import NumericInput from 'react-native-numeric-input'


class Match extends React.Component {
  state = {user: ''}
  updateUser = (user) => { this.setState({user: user}) }
  render(){
    return(
      <View style={{   marginTop: 30, flex: 1, backgroundColor: 'yellow' }}>
        <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center' , justifyContent: 'center' }}>
          <NumericInput totalWidth={240}
            totalHeight={80}
            iconSize={25} onChange={ value => console.log(value)} rounded minValue={0} maxValue={11} rightButtonBackgroundColor='red' leftButtonBackgroundColor='red'/>
        </View>
        <View style={{ flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
          <NumericInput totalWidth={240}
            totalHeight={80}
            iconSize={25} onChange={ value => console.log(value)} rounded minValue={0} maxValue={11} rightButtonBackgroundColor='green' leftButtonBackgroundColor='green'/>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container:{
    marginTop: 30,
    flex: 1
  }
})

export default Match
