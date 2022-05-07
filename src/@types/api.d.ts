import { AxiosError, AxiosResponse } from 'axios'

declare type ResponseType<T> = T extends AxiosError<infer E>
  ? E
  : T extends AxiosResponse<infer S>
  ? S
  : T

declare interface ErrorResponse {
  error: any & Error
}

declare interface LoginSucessResponse {
  jackpot: number
  round: IRound
  game_time: number
  premium_lines: IPremiumLines[]
  bonus_prize: number[]
  bonus_appear_anim: number[]

  premium_lines: IPremiumLines[]
  player: {
    id: number
    remote: string
    money: string
  }
  betting_coin: number[]
  bonus_prize: number,
  bonus_appear_anim: number,
  bonus_time_anim: number
  game_time: number
}
