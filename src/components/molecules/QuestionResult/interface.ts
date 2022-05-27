import { QuestionProps } from '../../../reducers/quizReducer/interface'

export interface QuestionResultProps {
  question: QuestionProps
  result: {
    id: number
    question: string
    choice: string
  }
}
