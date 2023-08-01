import { JSX, ReactNode } from 'react';
export type ControllerWithJSX = () => ReactElement;
export type ControllersWithJSX = ControllerWithJSX[];
export type VoidController = () => void;
export type VoidControllers = VoidController[];
type Props = {
    children: ReactNode;
    autostartFunctions?: VoidControllers;
    JSXControllers?: ControllersWithJSX;
    voidControllers?: VoidControllers;
};
export declare const ControllersComposition: ({ children, autostartFunctions, JSXControllers, voidControllers }: Props) => ReactElement;
export {};
