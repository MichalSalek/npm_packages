import React, {ReactElement, ReactNode, useEffect, useRef} from 'react'


export type ControllerWithJSX = () => ReactElement
export type ControllersWithJSX = ControllerWithJSX[]

export type NoReturnValueFunction = () => void
export type NoReturnValueFunctions = NoReturnValueFunction[]


type Props = {
  children?: ReactNode
  autostartFunctions?: NoReturnValueFunctions
  userInteractionFunctions?: NoReturnValueFunctions
  hookControllers?: NoReturnValueFunctions
  JSXControllers?: ControllersWithJSX
}

export const ControllersComposition = (
  {
    children = undefined,
    autostartFunctions = [],
    userInteractionFunctions = [],
    JSXControllers = [],
    hookControllers = []
  }: Props): ReactElement => {

  // Hooks
  //
  hookControllers?.map((controller: NoReturnValueFunction) => controller())


  const runOnce = useRef(false)
  useEffect(
    () => {
      if (runOnce.current) {
        return () => void undefined
      }
      runOnce.current = true

      // Autostart
      //
      autostartFunctions?.forEach((func: NoReturnValueFunction) => {
        func()
      })


      // User Interaction start
      //
      const userEvents = ['scroll',
        'keydown',
        'pointerdown',
        'pointermove',
        'touchstart']
      let innerRunOnce = false
      const callbackClosure = (): void => {
        if (innerRunOnce) {
          return void undefined
        }
        innerRunOnce = true
        setTimeout(
          () => {
            userInteractionFunctions?.forEach((func: NoReturnValueFunction) => {
              func()
            })
          },
          300)
        userEvents.forEach((eventName) => document?.removeEventListener(
          eventName,
          callbackClosure))
      }
      userEvents.forEach((eventName) => document?.addEventListener(
        eventName,
        callbackClosure))


      return () => void undefined
    },
    [])


  // JSX Controllers
  //
  return <>
    {JSXControllers?.map((controller: ControllerWithJSX, index: number) => {
      const calledController = controller()
      if (!calledController) {
        console.error('@msalek/controllers:' + ' Empty controller tried be called as JSX.')
        return null
      }
      return <aside key={index}>{calledController}</aside>
    })}

    {children}
  </>
}
