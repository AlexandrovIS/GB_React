import {EXAMPLE_ACTION} from '../actions/actionTypes'

const initialState = {
  showName: false,
  name: 'Default'
}

export const profileReducer=(state=initialState, action)=>{
  switch (action.type){
    case EXAMPLE_ACTION:
      return{
        ...state,
        showName: !state.showName
      }
      default:
        return state
  }
}

