import React from 'react'
import { StyleSheet, View, Button, TextInput, Picker, FlatList, Text} from 'react-native'
import teams from '../Helpers/teamsData'

class AddTeam extends React.Component {
  state = {user: ''}
  updateUser = (user) => { this.setState({user: user}) }
  render(){
    return(
      <View style={ styles.main_container }>
        <TextInput style={ styles.textinput } placeholder="Nom de l'équipe"/>
        <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
          <Picker.Item label = "2-2" value = "2-2" />
          <Picker.Item label = "1-1-2" value = "1-1-2" />
          <Picker.Item label = "1-2-1" value = "1-2-1" />
          <Picker.Item label = "3-1" value = "3-1" />
        </Picker>
        <Button style={{ height: 50 }} title="Ajouter" onPress={() => {}}/>
        {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
        <FlatList
          data={teams}
            keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
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

export default AddTeam
