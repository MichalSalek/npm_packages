export const freezeThreadAndWait = async (delay: number): Promise<void> =>
    new Promise(function (resolve) {
        setTimeout(resolve, delay)
    })
// Usage: const debounced = debounce(() => someFn(args));
// debounced();
export const debounce = (mainFunction: () => void, delay: number = 500) => {
    let timeoutId = 0
    return () => {
        window.clearTimeout(timeoutId)
        timeoutId = window.setTimeout(() => mainFunction(), delay)
    }
}
