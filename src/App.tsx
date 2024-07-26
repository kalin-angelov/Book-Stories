import "./App.css";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Context } from "./context/Context";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import EntryPage from "./components/EntryPage/EntryPage";
import AuthorBio from "./components/Authors/AuthorBio/AuthorBio";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";

function App() {
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
    const [cartOpen, setCartOpen] = useState<boolean>(false);

    const initialValue = {
        cartOpen,
        setCartOpen,
        windowSize,
        setWindowSize
    }

    return (
        <Context.Provider value={initialValue}>
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/entry" element={<EntryPage />} />
                    <Route path="/author_bio" element={<AuthorBio />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
                <Footer />
            </>
        </Context.Provider>
    );
};

export default App;
