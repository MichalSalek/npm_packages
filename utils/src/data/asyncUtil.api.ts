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


export const handlePromiseWithTimeout = async <T>(
  promise: Promise<T>,
  ms: number = 3000,
  timeoutError = new Error('@msalek/utils, handlePromiseWithTimeout: The timeout for a promise has passed.')
): Promise<T> => {
  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(timeoutError);
    }, ms);
  });
  return Promise.race<T>([promise, timeout]);
}

export const interactionFunctionCall = (functionToFire: Function) => {
  const USER_EVENTS = [ 'scroll', 'keydown', 'pointerdown', 'pointermove', 'touchstart' ] as const

    let innerRunOnce = false;

    function callbackClosure () {
      if (innerRunOnce) {
        return void undefined;
      }

      innerRunOnce = true;
      setTimeout(function () {
        functionToFire();
      }, 0);
      for (let i = 0; i < USER_EVENTS.length; i++) {
        document.removeEventListener(USER_EVENTS[i], callbackClosure);
      }

      return void undefined;
    }

    for (let i = 0; i < USER_EVENTS.length; i++) {
      document.addEventListener(USER_EVENTS[i], callbackClosure);
    }
};
