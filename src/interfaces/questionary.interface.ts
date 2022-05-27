export interface RequestQuestionary {
  title: string
  questions: Question[]
}

export interface ResponseQuestionary extends RequestQuestionary {
  _id?: string
  email: string
  __v?: string
}

export interface Question {
  title: string
  options: Option[]
}

export interface Option {
  title: string
  isCorrect: boolean
}
