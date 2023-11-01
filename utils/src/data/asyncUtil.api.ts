export const freezeThreadAndWait = async (delay: number): Promise<void> =>
    new Promise(function (resolve) {
        setTimeout(resolve, delay)
    })

export const debounce = function (mainFunction: () => void, delay: number = 500) {
    let timeoutId = 0
    return () => {
        window.clearTimeout(timeoutId)
        timeoutId = window.setTimeout(() => mainFunction(), delay)
    }
}
