import './App.css';

import AboutMe from "./comonents/AboutMe/AboutMe.tsx";
import Terminal from "./comonents/Terminal/Terminal.tsx";
import Help from "./comonents/Help/Help.tsx";
import Portfolio from "./comonents/Portfolio/Portfolio.tsx";
import {useEffect, useRef, useState} from "react";

function App() {
    const [siteAlive, setSiteAlive] = useState(true);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    });

        if (siteAlive) {
            return (
                <>
                    <div className="flex justify-center items-center h-screen" onClick={() => inputRef.current?.focus()}>
                        <div className="main main-container flex flex-col md:flex-row">
                            <div className="">
                                <AboutMe/>
                            </div>
                            <div className="flex flex-col flex-1 w-full md:w-2/4 pb-20">
                                <Portfolio/>
                                <Terminal ref={inputRef} onTerminate={() => setSiteAlive(false)} />
                                <Help/>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="flex justify-center items-center h-screen"></div>
                </>
            )
        }
}

export default App
