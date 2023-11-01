export const freezeThreadAndWait = async (delay: number): Promise<void> =>
  new Promise(function(resolve) {
    setTimeout(resolve, delay)
  })

export const debounce = {
    ...{
        timeoutId: 0,
        fn:        (mainFunction: () => void, delay: number = 500) => {
            window.clearTimeout(debounce.timeoutId)
            debounce.timeoutId = window.setTimeout(() => mainFunction(), delay)
        }
    }
}
