import React, { ReactNode, useEffect, useRef, ReactElement } from 'react'




export type ControllerWithJSX = () => ReactElement
export type ControllersWithJSX = ControllerWithJSX[]

export type VoidController = () => void
export type VoidControllers = VoidController[]


type Props = {
    children: ReactNode
    autostartFunctions?: VoidControllers
    JSXControllers?: ControllersWithJSX
    voidControllers?: VoidControllers
}

export const ControllersComposition = ({children, autostartFunctions = [], JSXControllers = [], voidControllers = []}: Props): ReactElement => {

    const fireOnce = useRef(false)
    useEffect(() => {
        if (fireOnce.current) return () => undefined

        fireOnce.current = true
        autostartFunctions.forEach((func: VoidController) => {
            func()
        })

        return () => undefined
    })


    voidControllers.forEach((controller: VoidController) => {
            controller()
        }
    )


    return <>
        {JSXControllers.map((controller: ControllerWithJSX) => {
            const calledController = controller()
            if (!calledController) {
                console.error('@msalek/controllers:' + ' Empty controller tried be called.')
            }
            return <aside key={calledController.key}>{calledController}</aside>
        })}

        {children}
    </>
}