import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { Context } from "./context/Context";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

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
        windowSize
    };

    return (
        <Context.Provider value={initialValue}>
            <>
                <Header />
                <Routes>
                
                </Routes>
                <Footer />
            </>
        </Context.Provider>
       
    )
}

export default App;
