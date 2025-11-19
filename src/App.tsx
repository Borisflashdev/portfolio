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
                    <div className="flex justify-center items-center" onClick={() => inputRef.current?.focus()}>
                        <div className="flex flex-col md:flex-row text-center p-5 gap-5 ml-[150px] mr-[150px] min-h-[min-content] mt-[50px] max-[767px]:mt-0">
                            <div className="">
                                <AboutMe/>
                            </div>
                            <div className="flex flex-col flex-1 w-full md:w-2/4">
                                <Portfolio/>
                                <Terminal ref={inputRef} onTerminate={() => setSiteAlive(false)} />
                                <Help/>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            return (<></>);
        }
}

export default App;
