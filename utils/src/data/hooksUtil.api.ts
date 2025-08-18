import {useEffect, useRef} from "react";

export const useFireOnMountHook = (fn: Function) => {
  const fireJustOnce = useRef(false)
  useEffect(() => {
    if (fireJustOnce.current) {
      return void undefined
    }
    fireJustOnce.current = true
    console.log('men')
    fn()
  }, [fn])
}
