import { AnyAction } from 'redux'
import { types } from '../../types/types'
import { quizProps } from './interface'

const initState: quizProps = {
  questionnaires: [],
  questionary: null,
  myChoice: null,
  myQuestionaries: [],
}

const quizReducer = (state = initState, action: AnyAction): quizProps => {
  switch (action.type) {
    case types.SET_QUESTIONARY:
      return {
        ...state,
        questionary: action.payload,
      }

    case types.SET_MY_QUESTIONARIES:
      return {
        ...state,
        myQuestionaries: action.payload,
      }

    case types.SET_MY_CHOICE:
      return {
        ...state,
        myChoice: action.payload,
      }

    case types.RESET_QUIZ:
      return {
        ...initState,
      }

    default:
      return state
  }
}

export default quizReducer
