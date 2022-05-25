export interface quizProps {
  questionnaires: questionaryProps[]
}

export interface questionaryProps {
  id: number | string
  title: string
  author: {
    userName: string
    userId: number | string
  }
  questions: questionProps[]
}

export interface questionProps {
  id: number | string
  title: string
  options: questionOptionProps[]
}

export interface questionOptionProps {
  option: string
  isCorrect: boolean
}
