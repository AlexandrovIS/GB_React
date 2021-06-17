import { MESSAGE_SEND } from "./actionTypes"

export const sendMessage = (params) => {
  return {
    type: MESSAGE_SEND,
    payload: params,
  }
}