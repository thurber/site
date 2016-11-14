import { Map, List } from 'immutable'
import * as Actions from '../actions/index'

let initialState = Map({
  showIntro: true,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.END_INTRO:
      return state.set('showIntro', false)
    default:
      return state
  }
}
