import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class TeamItem extends React.Component {
  render(){
    return(
      <View style={styles.main_container}>
        <Text style={styles.title_text}>Nom de l'équipe</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    main_container: {
      height: 190
    },
    title_text: {

    }
  }
)

export default TeamItem
