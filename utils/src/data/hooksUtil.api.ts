import {useEffect, useRef} from "react";

export const useFireOnMountHook = (fn: Function) => {
  const fireJustOnce = useRef(false)
  useEffect(() => {
    if (fireJustOnce.current) {
      return void undefined
    }
    fireJustOnce.current = true
    fn()
  }, [fn])
}
