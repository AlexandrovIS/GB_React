import { CHANGE_VALUE } from "./actionTypes"

export const changeValue =(id, value)=>{
  return{
    type:CHANGE_VALUE,
    payload:{id, value}
  }
}