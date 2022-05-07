import { AxiosError } from 'axios'
import handleError from '../utils/errorHandler'
import api from './Api'

//   if (!(res instanceof Error)) {
//     return res.data
//   } else {
//     return { error: res.response?.data.detail }
//   }
// }

// para comparar com a dev
// export const generateGame = async () => {
//   const res = await api
//     .put(`${BASE_URL_API}/bet`)
//     .catch((err) => err as AxiosError)
//     if (res instanceof Error) {
//         handleError(res?.response?.status);
//         return { error: res };

//const BASE_URL_BET = "/api/v2/remotes/123/sessions/1231/rounds/35/bet?secret_bingot_key=ee38e2d90160941d80f4a809b16bb997"
//const BASE_URL_CARDS = "/api/v2/remotes/123/sessions/1231/rounds/35/new-cards?secret_bingot_key=ee38e2d90160941d80f4a809b16bb997";
//const BASE_URL_LOGIN = "api/v2/remotes/123/sessions/1231/login?secret_=ee38e2d90160941d80f4a809b16bb997";

interface ErrorResponse {
  detail: string
}


const BASE_URL = 'api/v1/remotes/312das/sessions/dasddassa'
//               'api/v1/remotes/*remote_id*/sessions/*session_id*'


// Função para pegar round inicial
export const getInitialRound = async (url = BASE_URL) => {
  const res = await api
    .get(`${url}/login?secret_bingot_key=ee38e2d90160941d80f4a809b16bb997`)
    .catch((err) => err as AxiosError)
  if (!(res instanceof Error)) {
    return res.data
  } else {
    if (res.response?.data.detail) {
      handleError(res.response?.data.detail)
      return { error: res.response?.data.detail }
    } else {
      return { error: 'error' }
    }
  }
}

// Função para gerar novas cartelas
export const getCards = async (round: number, url = BASE_URL) => {
  const res = await api
    .patch(
      `${url}/rounds/${round}/new-cards?secret_bingot_key=ee38e2d90160941d80f4a809b16bb997`
    )
    .catch((err) => err as AxiosError)
  console.log(res)
  if (!(res instanceof Error)) {
    return res.data
  } else {
    if (res.response?.data.detail) {
      handleError(res.response?.data.detail)
      return { error: res.response?.data.detail }
    } else {
      return { error: 'error' }
    }
  }
}

// Função para gerar novo jogo
export const generateGame = async (
  round: number,
  credit: number,
  cards_count: number,
  url = BASE_URL
) => {
  try {
    const res = await api.post<IGame>(
      `${url}/rounds/${round}/bet?secret_bingot_key=ee38e2d90160941d80f4a809b16bb997`,
      { credit, cards_count }
    )
    return res.data
  } catch (err) {
    const response = err as AxiosError<ErrorResponse>
    const { detail } = response.response?.data

    return { error: detail || 'error' }
  }
  //     return { data: res };
  //   if (!(res instanceof Error)) {
  //     return res.data
  //   } else {
  //     return { error: res.response?.data.detail }
  //   }
}

export const BallExtra = async (round: number, url = BASE_URL) => {
  const res = await api
    .patch<IBallExtra>(
      `${url}/rounds/${round}/extra-balls?secret_bingot_key=ee38e2d90160941d80f4a809b16bb997`
    )
    .catch((err) => err as AxiosError)
  if (!(res instanceof Error)) {
    return { data: res.data }
  } else {
    if (res.response?.data.detail) {
      return { error: res.response?.data.detail }
    } else {
      return { error: 'error' }
    }
  }
}


export const AutoPlay = async (
  credit: number, cards_count: number, amount: number,
  win_in_round: number, balance_increase: number, balance_decrease: number,
  stop_win: boolean, stop_win_bonus: boolean, stop_win_extra_ball: boolean,
  round: number, url = BASE_URL) => {
    
  const res = await api
    .post<IGame[]>(
      `${url}/rounds/${round}/auto-play?secret_bingot_key=ee38e2d90160941d80f4a809b16bb997`,
      {
        credit, cards_count, amount, win_in_round, balance_increase, balance_decrease,
        stop_win, stop_win_bonus, stop_win_extra_ball
      }
    )
    .catch((err) => err as AxiosError)
  if (!(res instanceof Error)) {
    return res.data ;
  } else {
    if (res.response?.data.detail) {
      handleError(res.response?.status, res.response?.data.detail)
      return { error: res.response?.data.detail }
    } else {
      return { error: 'error' }
    }
  }
} 