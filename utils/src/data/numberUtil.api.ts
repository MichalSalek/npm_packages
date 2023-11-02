export const randomIntFromNumbersRange = (minRange: number, maxRange: number): number => {
    if (Number.isNaN(Number(minRange))) {
        throw Error('minRange is not a number.')
    }
    if (Number.isNaN(Number(maxRange))) {
        throw Error('maxRange is not a number.')
    }
    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange)
}

export const only2DigitsFloat = (data: number, round?: 'up' | 'down' | 'mathematically'): number | null => {
    if (Number.isNaN(Number(data))) {
        return null
    }
    const sureNumber = Number(data)

    switch (round) {
        case 'mathematically':
            return Number(Math.round(sureNumber).toFixed(2))
        case 'up':
            return Number(Math.ceil(sureNumber).toFixed(2))
        case 'down':
        default:
            return Number(Math.floor(sureNumber).toFixed(2))
    }
}
