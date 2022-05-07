

export const random = (cards: ICard[], amount: number) => {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    const arr = [];
    for(let x = 0; x < amount ; x++){
        arr.push(cards[x]);
    }
    return arr;
}