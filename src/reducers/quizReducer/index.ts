import { AnyAction } from 'redux'
import { types } from '../../types/types'
import { quizProps } from './interface'

const initState: quizProps = {
  questionnaires: [],
}

const quizReducer = (state = initState, action: AnyAction): quizProps => {
  switch (action.type) {
    case types.RESET_QUIZ:
      return {
        ...initState,
      }

    default:
      return state
  }
}

export default quizReducer
