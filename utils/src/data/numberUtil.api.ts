export const randomIntFromNumbersRange = (minRange: number, maxRange: number): number => {
    if (Number.isNaN(Number(minRange))) {
        throw Error('minRange is not a number.')
    }
    if (Number.isNaN(Number(maxRange))) {
        throw Error('maxRange is not a number.')
    }
    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange)
}

export const only2DigitsFloat = (data: number | string): number | null => {
    if (Number.isNaN(Number(data))) {
        console.error('only2DigitsFloat', 'Input data is not a number.', typeof data, data)
        return null
    }
    return parseFloat(Number(data).toFixed(2))
}
