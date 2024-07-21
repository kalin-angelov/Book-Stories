import "./App.css";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Context } from "./context/Context";
import { initialValue } from "./types/initialValue";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import EntryPage from "./components/EntryPage/EntryPage";
import Footer from "./components/Footer/Footer";

function App() {

    const [openCart, setOpenCart] = useState<boolean>(false)

    const initialValue = {
        openCart,
        setOpenCart
    }

    return (
        <Context.Provider value={initialValue}>
            <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/entry" element={<EntryPage />} />
            </Routes>
            <Footer />
            </>
        </Context.Provider>
    );
};

export default App;
