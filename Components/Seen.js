import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class Seen extends React.Component {

  render() {
    console.log(this.props)
    return (
      <View style={styles.main_container}>
        <FilmList
          films={this.props.seensFilm}
          navigation={this.props.navigation}
          favoriteList={false}
          seenList={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm,
    seensFilm: state.toggleSeen.seensFilm
  }
}

export default connect(mapStateToProps)(Seen)

