import React, {useEffect, useState} from 'react'
import Loading from "./components/Loading/loading";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Suitable from "./components/Suitable/suitable";
import Result from "./components/Result/result";
import Reason from "./components/Reason/reason";
import Program from "./components/Program/program";
import Address from "./components/Address/address";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import UpArrow from "./components/Up-arrow/upArrow";

import './App.css'

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    });

    return (
        <div className="app">
            {
                isLoading === true ?
                    <Loading/> :
                    <div>
                        <Header/>
                        <About/>
                        <Suitable/>
                        <Result/>
                        <Reason/>
                        <Program/>
                        <Address/>
                        <Contact/>
                        <Footer/>
                        <UpArrow showBelow={250}/>
                    </div>
            }

        </div>
    );
}

export default App;
