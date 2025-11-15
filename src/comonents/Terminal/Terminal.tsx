import './Terminal.css';
import {type JSX, useEffect, useRef, useState} from "react";

const Terminal = () => {
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<JSX.Element[]>([]);
    const [pre, setPre] = useState<string>("guest@bm11.dev:~$ ");
    const main = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        main.current?.scrollTo({
            top: main.current.scrollHeight,
            behavior: "smooth"
        });
    }, [output]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (<>
        <div className="main-terminal" ref={main}>
            <div className="terminal">
                {output}
            </div>
            <span className="gc">{pre}</span>
            <input type="text" value={input} ref={inputRef} onChange={(e) => setInput(e.target.value)} onKeyDown={e => {
                if (e.key === "Enter") {

                    let newOutput = "guest@bm11.dev:~$ ";
                    if(input.trim() == "") {
                        setOutput(prev => [...prev, <div><span className="gc">{newOutput}</span><br/></div>]); return;
                    }

                    if (pre == "guest@bm11.dev:~$ ") {
                        switch (input.trim()) {
                            case "ls": setOutput(prev => [...prev, <div><span className="gc">{newOutput}</span>{input} <br/>about_me.txt general_intrests.txt skills.txt <span className="dc">Expirience</span>/ <span className="dc">Projects</span>/ <span className="dc">Education</span>/<br/></div>]); break;
                            case "clear": newOutput = ""; setOutput([]); break;
                            case "cat about_me.txt": setOutput(prev => [...prev, <div><span className="gc">{newOutput}</span>{input}<br/>
                                I'm a <b>Junior Software Developer</b> with over <b>two years of experience</b>. I have a good eye for detail, <b>strong problem-solving skills</b>, and am a <b>team player</b>.<br/><br/>

                                I have a strong desire to <b>learn as much as possible</b> and become a <b>better Developer</b>. I am particularly passionate about <b>Data Science</b> and <b>Machine Learning</b> technologies and eager to expand my knowledge in these fields.<br/><br/>

                                I have a lot of experience in <b>React.js, C, and Python</b>.<br/>
                            </div>]); break;
                            default: setOutput(prev => [...prev, <div><span className="gc">{newOutput}</span>{input}<br/>command not found: {input}</div>]); break;
                        }
                    }


                    setInput("");
                }
            }} />
        </div>

    </>);
}

export default Terminal;