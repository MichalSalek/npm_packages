import {useEffect, useRef} from 'react';

const matrix: Record<string | number, boolean> = {};

export const useFireOnMountHook = (fn: Function, randomID: number | string, oncePerAppRun_CAREFUL: boolean = false) => {

  const fireJustOnce = useRef(false)

  useEffect(() => {

    if (oncePerAppRun_CAREFUL) {

      if (matrix[randomID]) {
        return void undefined
      }
      matrix[randomID] = true
      fn()

    } else {

      if (fireJustOnce.current) {
        return void undefined
      }
      fireJustOnce.current = true
      fn()
    }
  }, [fn])
}
