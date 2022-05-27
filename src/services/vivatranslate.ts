import axios from 'axios'
import {
  RequestQuestionary,
  ResponseQuestionary,
} from '../interfaces/questionary.interface'
import { RequestLogin } from '../interfaces/auth.interface'
import {
  CREATE_QUESTIONARY_ENDPOINT,
  DELETE_QUESTIONARY_ENDPOINT,
  EDIT_QUESTIONARY_ENDPOINT,
  GET_ALL_QUESTIONARIES_ENDPOINT,
  GET_MY_QUESTIONARIES_ENDPOINT,
  GET_QUESTIONARY_BY_ID_ENDPOINT,
  LOGIN_ENDPOINT,
  REGISTER_ENDPOINT,
} from '../constants'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BACKEND,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createQuestionary = async (
  questionary: RequestQuestionary,
  jwt: string
) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
  return instance.post<ResponseQuestionary>(
    `${CREATE_QUESTIONARY_ENDPOINT}`,
    questionary
  )
}

export const editQuestionary = async (
  idQuestionary: string,
  questionary: RequestQuestionary,
  jwt: string
) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
  return instance.put<ResponseQuestionary>(
    `${EDIT_QUESTIONARY_ENDPOINT}/${idQuestionary}`,
    questionary
  )
}

export const deleteQuestionaryById = async (
  idQuestionary: string,
  jwt: string
) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
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

export const getMyQuestionaries = async (jwt: string) => {
  console.log('jwt: ', jwt)
  instance.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
  return instance.get<ResponseQuestionary[]>(`${GET_MY_QUESTIONARIES_ENDPOINT}`)
}

export const login = async (user: RequestLogin) => {
  return instance.post(`${LOGIN_ENDPOINT}`, user)
}

export const register = async (user: RequestLogin) => {
  return instance.post(`${REGISTER_ENDPOINT}`, user)
}
