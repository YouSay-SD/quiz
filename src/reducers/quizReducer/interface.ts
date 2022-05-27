export interface quizProps {
  questionnaires: QuestionaryProps[]
  questionary: QuestionaryProps
  myChoice: MyChoiceProps
}

export interface QuestionaryProps {
  id: number | string
  title: string
  author: {
    userName: string
    userId: number | string
  }
  questions: QuestionProps[]
}

export interface QuestionProps {
  id: number | string
  title: string
  options: QuestionOptionProps[]
}

export interface QuestionOptionProps {
  option: string
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
