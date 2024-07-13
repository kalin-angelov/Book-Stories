import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { Context } from "./context/Context";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        const handleSize = () => {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener("resize", handleSize);

        return () => {
            window.removeEventListener("resize", handleSize);
        };

    },[windowSize]);


    const initialValue = {
        windowSize,
        cartOpen, 
        setCartOpen
    };

    return (
        <Context.Provider value={initialValue}>
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
                <Footer />
            </>
        </Context.Provider>
       
    )
}

export default App;
