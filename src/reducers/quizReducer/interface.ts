import { Action, AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootStore } from '../../store/store'

export interface quizProps {
  questionnaires: QuestionaryProps[]
  questionary: QuestionaryProps
  myChoice: MyChoiceProps
  myQuestionaries: QuestionaryProps[]
}

export interface QuestionaryProps {
  _id: number | string
  title: string
  email: string
  __v?: string | number
  questions: QuestionProps[]
}

export interface QuestionProps {
  id: number | string
  title: string
  options: QuestionOptionProps[]
}

export interface QuestionOptionProps {
  title: string
  isCorrect: boolean
}

export interface MyChoiceProps {
  find: any
  myChoice: ChoiceProps[]
}

export interface ChoiceProps {
  id: number
  question: string
  choice: string
}

export type ThunkAction<
  R, // Return type of the thunk function
  S, // state type used by getState
  E, // any "extra argument" injected into the thunk
  A extends Action // known types of actions that can be dispatched
> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStore,
  unknown,
  AnyAction
>
