import axios from 'axios'

import {
  RequestQuestionary,
  ResponseQuestionary,
} from '../interfaces/questionary.interface'
import {
  CREATE_QUESTIONARY_ENDPOINT,
  DELETE_QUESTIONARY_ENDPOINT,
  EDIT_QUESTIONARY_ENDPOINT,
  GET_ALL_QUESTIONARIES_ENDPOINT,
  GET_MY_QUESTIONARIES_ENDPOINT,
  GET_QUESTIONARY_BY_ID_ENDPOINT,
} from '../constants'

/**
 * Por el momento harcodear el Token que se obtiene al logearse desde la api
 */
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BACKEND,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVuem9nZXJvbkBnbWFpbC5jb20iLCJpYXQiOjE2NTM2MDk1NjUsImV4cCI6MTY1NDIxNDM2NX0.tvMfx5vgrWq_wI1nK56gStg3gLUWZPm83Q0YQ6kDqY8',
  },
})

export const createQuestionary = async (questionary: RequestQuestionary) => {
  return instance.post<ResponseQuestionary>(
    `${CREATE_QUESTIONARY_ENDPOINT}`,
    questionary
  )
}

export const editQuestionary = async (
  idQuestionary: string,
  questionary: RequestQuestionary
) => {
  return instance.put<ResponseQuestionary>(
    `${EDIT_QUESTIONARY_ENDPOINT}/${idQuestionary}`,
    questionary
  )
}

export const deleteQuestionaryById = async (idQuestionary: string) => {
  return instance.delete<ResponseQuestionary>(
    `${DELETE_QUESTIONARY_ENDPOINT}/${idQuestionary}`
  )
}

export const getQuestionaryById = async (idQuestionary: string) => {
  return instance.get<ResponseQuestionary>(
    `${GET_QUESTIONARY_BY_ID_ENDPOINT}/${idQuestionary}`
  )
}

export const getAllQuestionaries = async () => {
  return instance.get<ResponseQuestionary[]>(
    `${GET_ALL_QUESTIONARIES_ENDPOINT}`
  )
}

export const getMyQuestionaries = async () => {
  return instance.get<ResponseQuestionary[]>(`${GET_MY_QUESTIONARIES_ENDPOINT}`)
}
