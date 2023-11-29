import {useState, useEffect} from 'react'


export const freezeThreadAndWait = async (delay: number): Promise<void> =>
    new Promise(function (resolve) {
        setTimeout(resolve, delay)
    })
// Usage:
// debounce(greeting, 3000)('Amit', 'the UK')
export const debounce = <T extends (...args: any[]) => ReturnType<T>>(
    callback: T,
    timeout: number
): ((...args: Parameters<T>) => void) => {
    let timer: ReturnType<typeof setTimeout>

    return (...args: Parameters<T>) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...args)
        }, timeout)
    }
}

export function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}
