import { combineReducers } from 'redux'
import quizReducer from '../reducers/quizReducer'

export const rootReducer = combineReducers({
  quiz: quizReducer,
})
