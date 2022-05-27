export interface quizProps {
  questionnaires: QuestionaryProps[]
  questionary: QuestionaryProps
  myChoice: MyChoiceProps
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
  myChoice: ChoiceProps[]
}

export interface ChoiceProps {
  id: number
  question: string
  choice: string
}
