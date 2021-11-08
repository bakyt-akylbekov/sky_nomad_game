import React from 'react'
import Header from "./components/Header/header";
import About from "./components/About/about";
import Suitable from "./components/Suitable/suitable";
import Result from "./components/Result/result";
import Reason from "./components/Reason/reason";
import Program from "./components/Program/program";
import Address from "./components/Address/address";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

import './App.css'

function App() {
    return (
        <div className="app">
            <Header/>
            <About/>
            <Suitable/>
            <Result/>
            <Reason/>
            <Program/>
            <Address/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
