/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { types } from '../types/types'

export const resetQuiz = () => {
  return async (dispatch: any) => {
    await dispatch({
      type: types.RESET_QUIZ,
    })
  }
}
