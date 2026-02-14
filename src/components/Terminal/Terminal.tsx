import '../../index.css';
import {type JSX, useEffect, useRef, useState} from "react";

interface Directory {
    files: Record<string, string>;
    dirs: string[];
}

type FileSystem = Record<string, Directory>;

const fileSystem: FileSystem = {
    "~": {
        files: {
            "about_me.txt": `I started coding in my <b>first year of high school</b> back in <b>2020</b> — and by the end of my second year, I'd already landed my <b>first freelance job</b> building an <b>admin panel</b> for a <b>US-based logistics company</b> in <span style="color: #41B883">Vue.js</span>. Since then, I've done <b>two internships</b>, shipped <b>full-stack apps to production</b>, and picked up freelance work along the way. I'm currently in my <b>second year of Computer Science</b> at <b>RAF Belgrade</b>.<br/><br/>Right now, I'm deep into <b>AI and machine learning</b> — and I mean all of it. <b>NLP</b>, <b>computer vision</b>, <b>reinforcement learning</b>, <b>generative AI</b> — if it has "AI" in the name, I'm interested. My goal is to <b>specialize and build a career in AI/ML</b>.`,
            "hobbies.txt": `Outside of code, I'm big into <b>philosophy</b> — especially <b>Stoicism</b> and <b>Nietzsche</b>. Some of my favorites are <b>Marcus Aurelius' Meditations</b>, <b>Epictetus' Discourses</b>, <b>Seneca's On Providence</b>, and <b>Kafka's The Trial and Metamorphosis</b>, with <b>A.C. Grayling's History of Philosophy</b> being my all-time favorite. How I think about problems — both in code and in life — is heavily shaped by what I read.<br/><br/>My biggest passion outside of tech is <b>aviation</b>. I'm fascinated by <b>aircraft systems</b>, especially <b>Airbus</b>, and my life goal is to earn a <b>pilot license</b> one day, even if just for sport flying. I also have a deep interest in <b>Late Modern history</b> — everything from the <b>Napoleonic Wars</b> and <b>decolonization</b> to the <b>World Wars</b>.<br/><br/>On the tech side, I'm curious about <b>cybersecurity</b> and plan to explore it more seriously alongside my <b>AI/ML focus</b>.`,
            "languages.txt": `<b>Serbian:</b> Native</br><b>English:</b> Professional working proficiency <b>(CEFR C1)</b>`
        },
        dirs: ["Education", "Experience", "Skills", "Certifications"]
    },
    "~/Education": {
        files: {
            "high_school.txt": `<b><span class="font-bold text-[#5555FF]">Electrical Engineering High School "Nikola Tesla"</span></br><span class="text-[#ff8a00]">High School Diploma, Electrical and Electronics Engineering</span></br>2020 - 2024</b></br></br>My studies focused on <b>analog and digital electronics</b>, <b>telecommunications</b>, <b>microprocessors</b>, and <b>automation</b>. The only programming I touched in school was <span style="color: #A8B9CC">C</span> and <span style="color: #5E5C5C">Assembly</span>. Everything else — <b>frontend</b>, <b>backend</b>, <b>ML</b> — I taught myself outside of class.`,
            "university.txt": `<b><span class="font-bold text-[#5555FF]">Union University Faculty of Computing (RAF)</span></br><span class="text-[#ff8a00]">Bachelor of Science - BS, Computer Science</span></br>2024 - Present</b></br></br>I'm studying <b>Computer Science</b> on the <b>Artificial Intelligence track</b>. So far, I've completed courses in <b>Linear Algebra and Analytic Geometry</b>, <b>Discrete Mathematics</b>, <b>Calculus</b>, <b>OOP</b>, and <b>Expert Systems</b>.</br></br>Curious about the program? Run <span style="color: #00E5FF">open raf.link</span>`,
        },
        dirs: []
    },
    "~/Experience": {
        files: {
            "atlantic_grupa.txt": `<b><span class="font-bold text-[#5555FF]">Software Engineer Intern</span></br><span class="text-[#ff8a00]">Atlantic Grupa</span></br>Mar 2025 – Apr 2025</b></br></br>Provided <b>IT support</b> including <b>OS reinstallation</b> and <b>workstation setup</b>, tracking everything through <span style="color: #0052CC">Jira</span>. Participated in <b>cross-departmental meetings</b> with <b>senior leadership</b> and learned <b>SAP business processes</b> and <b>end-to-end enterprise workflows</b>. Completed an internal <b>Data Processing and Analytics course</b> covering <span style="color: #4DABCF">NumPy</span> and <span style="color: #150458">Pandas</span>.</br></br>Visit their website: <span style="color: #00E5FF">open atlantic.link</span>`,
            "techtonnik.txt": `<b><span class="font-bold text-[#5555FF]">Software Engineer Intern</span></br><span class="text-[#ff8a00]">Techtonnik</span></br>Jun 2023 – Oct 2023</b></br></br>Built an <b>internal administration panel</b> using <span style="color: #61DAFB">React</span>, <span style="color: #3178C6">TypeScript</span>, <span style="color: #339933">Node.js</span>, and <b>Express</b> with <span style="color: #336791">PostgreSQL</span> database schemas designed from scratch. Developed <b>full-stack web applications</b> deployed to production using <b>Docker</b>, working in <b>weekly sprints</b> with company-wide stand-ups.</br></br>Check out the company: <span style="color: #00E5FF">open techtonnik.link</span>`,
            "freelance.txt": `<b><span class="font-bold text-[#5555FF]">Freelance Software Developer</span></br><span class="text-[#ff8a00]">Remote</span></br>Aug 2022 – Dec 2023</b></br></br>Built <b>CRUD admin panels</b> for multiple clients — including a <b>US-based logistics company</b> where I developed a <b>delivery and fleet tracking dashboard</b> using <span style="color: #42b883">Vue.js</span> and <span style="color: #1976D2">Quasar</span>, and an admin panel for <b>Balkanski Kulturni Centar</b> built with <span style="color: #61DAFB">React</span>, <span style="color: #3178C6">TypeScript</span>, and <span style="color: #764ABC">RTK Query</span>. Worked in small teams, managing tasks and sprints through <span style="color: #0052CC">Jira</span>.`,
        },
        dirs: []
    },
    "~/Projects": {
        files: {
           //"c_learn.txt": `<span class="font-bold text-[#5555FF]">C Learn</span></br><span class="text-[#ff8a00]">Personal Project</span></br>2025 - Present</b></br></br>A <b>zero-dependency machine learning library</b> written in pure <span style="color: #A8B9CC">C</span>. Features <b>linear regression</b> (normal equation), <b>logistic regression</b> with sigmoid activation and probability prediction, and <b>SGD regression</b> — all supporting <b>L1</b>, <b>L2</b>, and <b>Elastic Net regularization</b>. Includes a custom <b>linear algebra engine</b> for matrix operations, transposition, inversion, slicing, and CSV parsing, along with a <b>feature scaling pipeline</b> (min-max, mean normalization, standardization) similar to <b>scikit-learn</b>. Currently expanding with <b>neural networks</b>, <b>decision trees</b>, and <b>clustering algorithms</b>.</br></br>Read the docs: <span style="color: #00E5FF">open c-learn.link</span>`,
        },
        dirs: []
    },
    "~/Skills": {
        files: {
            "programming_languages.txt": `<span style="color: #A8B9CC">C</span> <span style="color: #3776AB">Python</span> <span style="color: #3178C6">TypeScript</span> <span style="color: #00758F">SQL</span>`,
            "web.txt": `<span style="color: #61DAFB">React</span> <span style="color: #42b883">Vue.js</span> <span style="color: #339933">Node.js</span> <b>Express</b>`,
            "ml_dl.txt": `<span style="color: #F89A36">scikit-learn</span> <span style="color: #4DABCF">NumPy</span> <span style="color: #150458">Pandas</span>`,
            "tools.txt": `<b>Docker</b> <span style="color: #336791">PostgreSQL</span> <span style="color: #0052CC">Jira</span> <span style="color: #F05033">Git</span>`,
        },
        dirs: []
    },
    "~/Certifications": {
        files: {
            "english_c1.txt": `<b><span class="font-bold text-[#5555FF]">CEFR C1 English</span></br><span class="text-[#ff8a00]">British Council</span></br>Oct 2024</b>`,
            //"ml_specialization.txt": `<b><span class="font-bold text-[#5555FF]">Machine Learning Specialization</span></br><span class="text-[#ff8a00]">Andrew Ng, Coursera</span></br>2026</b>`
        },
        dirs: []
    }
};

interface TerminalProps {
    onTerminate: () => void;
    ref: React.RefObject<HTMLInputElement | null>;
}

const Terminal: React.FC<TerminalProps> = ({ onTerminate, ref }) => {
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<JSX.Element[]>([]);
    const [currentPath, setCurrentPath] = useState<string>("~");
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);
    const [typingText, setTypingText] = useState<string>("");
    const [isTyping, setIsTyping] = useState<boolean>(true);
    const main = useRef<HTMLDivElement | null>(null);

    const getPrompt = () => `guest@bm11.dev:${currentPath}${currentPath === "~" ? "" : currentPath === "~/Projects" ? " " : ""}$ `;

    useEffect(() => {
        const command = "cat welcome.txt";
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setTypingText(command.slice(0, i));
            if (i >= command.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setTypingText("");
                    setIsTyping(false);
                    setOutput([
                        <div>
                            <span className="text-[#39FF14]">{`guest@bm11.dev:~$ `}</span>cat welcome.txt<br/>
                            Welcome to my portfolio!<br/>
                            To start, type <span className="text-[#00E5FF]">ls</span> to see available files (or read the box below).
                        </div>
                    ]);
                    requestAnimationFrame(() => ref.current?.focus({ preventScroll: true }));
                }, 400);
            }
        }, 80);
        return () => clearInterval(interval);
    }, [ref]);

    useEffect(() => {
        main.current?.scrollTo({
            top: main.current.scrollHeight,
            behavior: "smooth"
        });
    }, [output]);

    const addOutput = (content: JSX.Element) => {
        setOutput(prev => [...prev, content]);
    };

    const handleLs = () => {
        const current = fileSystem[currentPath];
        const files = Object.keys(current.files).join(" ");
        const dirs = current.dirs.map(d => `<span class="font-bold text-[#5555FF]">${d}</span>/`).join(" ");
        const content = [files, dirs].filter(Boolean).join(" ");

        addOutput(<div><span className="text-[#39FF14]">{getPrompt()}</span>{input}<br/><span dangerouslySetInnerHTML={{__html: content}}/><br/></div>);
    };

    const handleCat = (filename: string) => {
        const current = fileSystem[currentPath];

        if (current.files[filename]) {
            addOutput(
                <div>
                    <span className="text-[#39FF14]">{getPrompt()}</span>{input}<br/>
                    <span dangerouslySetInnerHTML={{__html: current.files[filename]}}/>
                </div>
            );
        } else {
            addOutput(
                <div>
                    <span className="text-[#39FF14]">{getPrompt()}</span>{input}<br/>
                    cat: {filename}: No such <span className="text-[#ff8a00]">file</span>
                </div>
            );
        }
    };

    const handleCd = (dirname: string) => {
        if (dirname === "..") {
            if (currentPath !== "~") {
                setCurrentPath("~");
            }
            addOutput(<div><span className="text-[#39FF14]">{getPrompt()}</span>{input}<br/></div>);
        } else {
            const current = fileSystem[currentPath];
            if (current.dirs.includes(dirname)) {
                setCurrentPath(`~/${dirname}`);
                addOutput(<div><span className="text-[#39FF14]">{getPrompt()}</span>{input}<br/></div>);
            } else {
                addOutput(
                    <div>
                        <span className="text-[#39FF14]">{getPrompt()}</span>{input}<br/>
                        cd: {dirname}: No such <span className="text-[#ff8a00]">directory</span>
                    </div>
                );
            }
        }
    };

    const handleEcho = () => {
        const text = input.trim().substring(input.trim().indexOf(" ") + 1);
        addOutput(
            <div>
                <span className="text-[#39FF14]">{getPrompt()}</span>{input}<br/>
                {text}
            </div>
        );
    };

    const handleCommand = () => {
        const trimmed = input.trim();
        const prompt = getPrompt();

        if (trimmed === "") {
            addOutput(<div><span className="text-[#39FF14]">{prompt}</span><br/></div>);
            return;
        }

        const parts = trimmed.split(" ");
        const command = parts[0];
        const arg = parts.slice(1).join(" ");

        switch (command) {
            case "clear":
                setOutput([]);
                break;
            case "echo":
                handleEcho();
                break;
            case "ls":
                handleLs();
                break;
            case "cat":
                handleCat(arg);
                break;
            case "cd":
                handleCd(arg);
                break;
            case "sudo":
                if (trimmed.includes("rm -rf /")) {
                    onTerminate();
                } else {
                    addOutput(
                        <div>
                            <span className="text-[#39FF14]">{prompt}</span>{input}<br/>
                            Permission denied: You are not allowed to run this <span className="text-[#ff8a00]">command</span>
                        </div>
                    );
                }
                break;
            case "open":
                if (currentPath === "~/Education" && arg === "raf.link") {
                    window.open("https://raf.edu.rs/", "_blank");
                    addOutput(
                        <div>
                            <span className="text-[#39FF14]">{prompt}</span>{input}<br/>
                            Opening RAF website...
                        </div>
                    );
                } else if (currentPath === "~/Experience" && arg === "atlantic.link") {
                    window.open("https://www.atlanticgrupa.com/en/", "_blank");
                    addOutput(
                        <div>
                            <span className="text-[#39FF14]">{prompt}</span>{input}<br/>
                            Opening Atlantic Grupa website...
                        </div>
                    );
                } else if (currentPath === "~/Experience" && arg === "techtonnik.link") {
                    window.open("https://www.techtonnik.com/", "_blank");
                    addOutput(
                        <div>
                            <span className="text-[#39FF14]">{prompt}</span>{input}<br/>
                            Opening Techtonnik website...
                        </div>
                    );
                } else if (currentPath === "~/Projects" && arg === "c-learn.link") {
                    window.open("https://c-learn-docs.vercel.app/home", "_blank");
                    addOutput(
                        <div>
                            <span className="text-[#39FF14]">{prompt}</span>{input}<br/>
                            Opening C Learn documentation...
                        </div>
                    );
                } else {
                    addOutput(
                        <div>
                            <span className="text-[#39FF14]">{prompt}</span>{input}<br/>
                            open: {arg}: No such <span className="text-[#ff8a00]">link</span>
                        </div>
                    );
                }
                break;
            default:
                addOutput(
                    <div>
                        <span className="text-[#39FF14]">{prompt}</span>{input}<br/>
                        {trimmed}: <span className="text-[#ff8a00]">command</span> not found
                    </div>
                );
        }
    };

    return (
        <div className="border-2 border-white rounded-sm mb-5 h-[324px] w-full text-left p-2.5 whitespace-pre-wrap overflow-y-auto no-scrollbar self-center max-[417px]:w-[350px] max-[405px]:w-[320px] max-[375px]:w-[260px] max-[400px]:text-xs" ref={main}>
            {output}
            <div className="flex flex-row items-center w-full relative">
                <span className="text-[#39FF14] shrink-0">{getPrompt()}</span>
                {isTyping ? (
                    <span>{typingText}<span className="animate-pulse">▌</span></span>
                ) : (
                <>
                    <input
                        className="terminal-input border-none outline-none bg-transparent text-transparent caret-transparent p-0 m-0 h-6 w-full absolute left-0 max-[400px]:h-4"
                        type="text"
                        autoCapitalize="off"
                        autoCorrect="off"
                        autoComplete="off"
                        spellCheck={false}
                        value={input}
                        ref={ref}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                const trimmed = input.trim();
                                if (trimmed !== "") {
                                    setHistory(prev => [...prev, trimmed]);
                                }
                                setHistoryIndex(-1);
                                handleCommand();
                                setInput("");
                            } else if (e.key === "ArrowUp") {
                                e.preventDefault();
                                if (history.length === 0) return;
                                const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
                                setHistoryIndex(newIndex);
                                setInput(history[newIndex]);
                            } else if (e.key === "ArrowDown") {
                                e.preventDefault();
                                if (historyIndex === -1) return;
                                if (historyIndex >= history.length - 1) {
                                    setHistoryIndex(-1);
                                    setInput("");
                                } else {
                                    const newIndex = historyIndex + 1;
                                    setHistoryIndex(newIndex);
                                    setInput(history[newIndex]);
                                }
                            }
                        }}
                    />
                    <span>{input}</span><span className="terminal-cursor">▌</span>
                </>
                )}
            </div>
        </div>
    );
}

export default Terminal;