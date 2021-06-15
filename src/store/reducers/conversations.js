import { CHANGE_VALUE } from "../actions/actionTypes"

const initialState = [
  { title: "room1", value: "" },
  { title: "test-room2", value: "" },
  { title: "room3", value: "" },
]

export const conversationsReducer = (state=initialState,action)=>{
  switch(action.type){
    case CHANGE_VALUE:
      return state.map((room) =>
        room.title === action.payload.id ? { ...room, value: action.payload.value } : room,
      )
      default:
        return state
  }
}