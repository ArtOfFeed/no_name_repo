import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./compontents/layouts/Header";
import Footer from "./compontents/layouts/Footer";
import Main from "./compontents/layouts/Main";

function App() {
    return (
        <>
            <Header logo={logo}/>
            <Main />
            <Footer />
        </>
    );
}

export default App;
