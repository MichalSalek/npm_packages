import React, { ReactElement, ReactNode, useEffect, useRef } from 'react'




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



    // Autostart
    //
    const runOnce = useRef(false)
    useEffect(() => {
        if (runOnce.current) return () => void undefined
        runOnce.current = true
        autostartFunctions?.forEach((func: NoReturnValueFunction) => {
            func()
        })
        return () => void undefined
    })



    // User Interaction start
    //
    const runOnce2 = useRef(false)
    useEffect(() => {
        if (runOnce2.current) return () => void undefined
        runOnce2.current = true
        const userEvents = ['scroll', 'keydown', 'pointerdown', 'pointermove', 'touchstart']
        let innerRunOnce = false
        const callbackClosure = (): void => {
            if (innerRunOnce) return void undefined
            innerRunOnce = true
            setTimeout(() => {
                userInteractionFunctions?.forEach((func: NoReturnValueFunction) => {
                    func()
                })
            }, 1000)
            userEvents.forEach((eventName) => document?.removeEventListener(eventName, callbackClosure))
        }
        userEvents.forEach((eventName) => document?.addEventListener(eventName, callbackClosure))
        return () => void undefined
    }, [])



    // Hooks
    //
    hookControllers?.forEach((controller: NoReturnValueFunction) => {
            controller()
        }
    )



    // JSX Controllers
    //
    return <>
        {JSXControllers?.map((controller: ControllerWithJSX, index: number) => {
            const calledController = controller()
            if (!calledController) {
                console.error('@msalek/controllers:' + ' Empty controller tried be called.')
                return null
            }
            return <aside key={index}>{calledController}</aside>
        })}

        {children}
    </>
}
