import { createContext } from "react";

export const Context = createContext({
    cartOpen: false,
    setCartOpen: (_value: boolean) => {},
    windowSize: window.innerWidth,
    setWindowSize: (_value: number) => {}
});