import { types } from '../types/types'

const initState = {
  answers: [],
}

export const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case types.RESET_QUIZ:
      return {
        initState,
      }

    default:
      return state
  }
}
