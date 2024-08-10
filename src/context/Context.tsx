import { createContext } from "react";

export type GlobalContextType = {
    windowSize: number,
    setWindowSize: React.Dispatch<React.SetStateAction<number>>,
    cartOpen: boolean,
    setCartOpen: React.Dispatch<React.SetStateAction<boolean>>,
};

export const GlobalContext = createContext<GlobalContextType>({
    windowSize: window.innerWidth,
    setWindowSize: () => {},
    cartOpen: false,
    setCartOpen: () => {}
});