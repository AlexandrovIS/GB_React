import { MESSAGE_SEND } from "../actions/actionTypes"


const initialState ={
  room1:[
     {author:'User',message:'Message_1',date:`${new Date().getHours()} ${new Date().getMinutes()}`}
    ],
  room2:[],
  room3:[]
  }


export const messagesReducer = (state=initialState,action)=>{
  switch(action.type){
    case MESSAGE_SEND:
      return {
        ...state,
        [action.payload.roomId]: [
          ...(state[action.payload.roomId] || []),
          {
            author: action.payload.author,
            message: action.payload.message,
            date: `${new Date().getHours()} ${new Date().getMinutes()}`,
          },
        ],
      }
      default:
        return state
  }
}