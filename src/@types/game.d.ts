declare interface IGame {
    res: number
    money: number
    amount_win: number
    jackpot: number
    bet_amount: number
    balls: number[]
    game_time: number
    extra_ball: 0 | 1
    armed_balls: number[]
    lines_winners: ILineWinners[]
    round: IRound
    bonus: boolean
    bonus_prize: number
    armed_lines: IArmedLine[]
    extra_ball_value: number
}

declare interface IArmedLine{
    id: number;
    card_index: number;
}

declare interface IShift {
    codigo: number
    estabelecimento: string
    posicao: number
    numeros: number[]
}

declare interface IBallExtra {
    res: number,
    money: number,
    amount_win: number,
    bet_amount: number,
    ball: number,
    winning_lines: [
        {
            card_index: number,
            id: number,
            multiplier: number,
            format: [number[]]
        }
    ],
    ball_next_value: number,
    armed_lines: [],
    armed_balls: [],
    extra_ball: 0 | 1,
    jackpot: number
}
declare interface ILineWinners {
    card_index: number
    id: number
    multiplier: number
    format: number[][]
}

declare interface IRound {
    id: number
    cards: ICard[]
}



declare interface IPremiumLines {
    id: number;
    format: number[][];
    multiplier: number;

}