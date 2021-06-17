import {combineReducers} from 'redux'
import {conversationsReducer} from './conversations'
import {messagesReducer} from './messages'
import {profileReducer}  from './profile'

// eslint-disable-next-line import/no-default-export
export default combineReducers({
  profile:profileReducer,
  conversations:conversationsReducer,
  messages:messagesReducer
})