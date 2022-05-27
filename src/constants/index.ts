const API = process.env.NEXT_PUBLIC_API_BACKEND

export const CREATE_QUESTIONARY_ENDPOINT = `${API}/questionary/create`

export const EDIT_QUESTIONARY_ENDPOINT = `${API}/questionary/edit/{id}`

export const DELETE_QUESTIONARY_ENDPOINT = `${API}/questionary/delete/{id}`

export const GET_MY_QUESTIONARIES_ENDPOINT = `${API}/questionary/me`

export const GET_ALL_QUESTIONARIES_ENDPOINT = `${API}/questionary`

export const GET_QUESTIONARY_BY_ID_ENDPOINT = `${API}/questionary`

export const REGISTER_ENDPOINT = `${API}/auth/register`

export const LOGIN_ENDPOINT = `${API}/auth/login`
