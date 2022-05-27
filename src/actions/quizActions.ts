/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { QuestionaryProps } from '../reducers/quizReducer/interface'
import { types } from '../types/types'

export const setQuestionary = (questionary: QuestionaryProps) => {
  return async (dispatch: any) => {
    await dispatch({
      type: types.SET_QUESTIONARY,
      payload: questionary,
    })
  }
}

export const setMyChoice = (myChoice: QuestionaryProps) => {
  return async (dispatch: any) => {
    await dispatch({
      type: types.SET_MY_CHOICE,
      payload: myChoice,
    })
  }
}

export const resetQuiz = () => {
  return async (dispatch: any) => {
    await dispatch({
      type: types.RESET_QUIZ,
    })
  }
}
