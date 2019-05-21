const initialState = { seensFilm: [] }

function toggleSeen(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_SEEN':
      const seenFilmIndex = state.seensFilm.findIndex(item => item.id === action.value.id)
      if (seenFilmIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          seensFilm: state.seenFilm.filter( (item, index) => index !== seenFilmIndex)
        }
      }
      else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          seensFilm: [...state.seensFilm, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleSeen
