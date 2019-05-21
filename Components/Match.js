import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import matchs from '../Helpers/matchsData'
import MatchItem from './MatchItem'

class Match extends React.Component {
  render(){
    return(
      <View style={ styles.main_container }>
        <TextInput style={ styles.textinput } placeholder="Titre du film"/>
        <Button style={{ height: 50 }} title="Rechercher" onPress={() => {}}/>
        {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
        <FlatList
          data={matchs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <MatchItem match={item}/>}
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

export default Match
