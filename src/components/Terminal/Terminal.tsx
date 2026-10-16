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
            "about_me.txt": `I started programming in my first year of high school in <b>2021</b> and by the end of next year I had already landed my first freelance job with a US-based client. Since then, I have completed two internships, started working at a real company, and continued to do freelance projects. I am currently in my third year of <b>Computer Science</b> at <b>RAF Belgrade</b>.<br/><br/>Even after high school, learning new things and building personal projects remained a hobby I still enjoy. I am interested in different areas of Computer Science, whether <b>AI/ML</b>, <b>Cybersecurity</b>, <b>Game Development</b> or <b>Mathematics</b>. There's always something new to learn.<br/><br/>As for work, I like to work from scratch and I like to combine several areas in projects. I am good at working in teams, I am reliable and responsible and I have a very good eye for detail, I love turning down PRs for the tiniest details.`,
            "hobbies.txt": `Aside from programming, I enjoy reading, it doesn't matter if it's a book, manga or comic. I'm most attracted to <b>philosophy</b> because I like to explore different questions that don't have clear answers. Philosophy affects not only my life and the way I think, but also the way I deal with work and programming. Some of my favorite books are: Kafka's <b>The Metamorphosis</b>, Epictetus' <b>Discourses</b>, and A.C. Grayling's <b>The History of Philosophy</b>.<br/><br/>I'm also a big fan of movies and comics, especially <b>Marvel</b> and <b>DC</b>. I've watched almost every MCU and DCU project, no matter how good or bad, and I also collect comics. I also occasionally watch anime and collect manga, with <b>One Piece</b> being my all-time favorite. I am generally interested in film and cinematography. I go to the cinema at least 2-3 times a month and collect <b>DVDs</b> and <b>VHS tapes</b>, and my favorite thing is watching old black and white movies on my <b>CRT TV</b>.<br/><br/>I also enjoy learning languages and I am currently taking Russian classes at the <b>Russian Centre of Science and Culture</b>.<br/><br/>But for sure, my greatest interest is <b>aviation</b>. I love planes and flying in general, and honestly my favorite part of traveling is flying. I always annoy my friends about which planes are flying over our heads. My goal is to become a pilot one day and I am currently saving money for a <b>PPL</b>.<br/><br/>As for outdoor and social activities, I quite like to ride a bike, occasionally go to the gym, and play board games with my friends, especially <b>RPGs</b> and <b>strategy games</b>. I also enjoy photography. I own a <b>Canon EOS 77D</b>, and in my free time I like to go out and see what I can photograph, even if I'm still learning. I also volunteer at NURDOR at least one or twice a week, and I am a regular blood donor every 4 months.`,
            "languages.txt": `<b>Serbian:</b> Native</br><b>English:</b> Professional working proficiency <b>(CEFR C1)</b></br><b>Russian:</b> Currently learning <b>(CEFR A2)</b>`
        },
        dirs: ["Education", "Experience", "Projects", "Skills", "Certifications"]
    },
    "~/Education": {
        files: {
            "high_school.txt": `<b><span class="font-bold text-[#5555FF]">Electrical Engineering High School "Nikola Tesla"</span></br><span class="text-[#ff8a00]">High School Diploma, Electrical and Electronics Engineering</span></br>2020 - 2024</b></br></br>My studies in high school were focused on <b>Digital Electronics</b>, <b>Hardware</b>, <b>Telecommunications</b>, <b>Microprocessors</b> and <b>Automation</b>. The only programming I touched was <span style="color: #F7DF1E; font-weight: normal">Javascript</span>, <span style="color: #A8B9CC; font-weight: normal">C</span> and <span style="color: #5E5C5C; font-weight: normal">Assembly</span>. Everything else I learned by myself, outside of school.`,
            "bachelor.txt": `<b><span class="font-bold text-[#5555FF]">Union University Faculty of Computing (RAF)</span></br><span class="text-[#ff8a00]">Bachelor of Science - BS, Computer Science</span></br>2024 - Present</b></br></br>I am currently studying <b>Computer Science</b> in the thematic groups <b>Theoretical Computing</b> and <b>Artificial Intelligence</b>. So far I have completed courses in <b>Linear Algebra and Analytic Geometry</b>, <b>Discrete Mathematics</b>, <b>Calculus</b>, <b>OOP</b> and <b>DSA</b>.</br></br>Visit their website: <span style="color: #00E5FF">open raf.link</span>`,
        },
        dirs: []
    },
    "~/Experience": {
        files: {
            "logistiq.txt": `<b><span class="font-bold text-[#5555FF]">Software Engineer</span><br><span class="text-[#ff8a00]">Remote</span><br>Jun 2026 – Present</b><br><br>I currently work in an IT team that develops a platform for monitoring margins in logistics: working with contracts, invoices, identifying errors and discrepancies (findings), and tracking financial recoveries.<br><br>My responsibilities include:<br>- Developing UI components for an AI copilot and document import workflows using <span style="color: #61DAFB">React</span>, with a <span style="color: #3776AB">Python</span> backend built with <span style="color: #009688">FastAPI</span>.<br>- Implementing client-side authentication and user management, such as <b>RBAC</b>, login, and invitations.<br>- Managing tasks and sprints through <span style="color: #0052CC">Jira</span>.<br><br>Visit their website: <span style="color: #00E5FF">open logistiq.link</span>`,
            "atlantic_grupa.txt": `<b><span class="font-bold text-[#5555FF]">Software Engineer Intern</span><br><span class="text-[#ff8a00]">Atlantic Grupa</span><br>Mar 2025 – Apr 2025</b><br><br>I provided IT support including OS reinstallation and workstation setup, tracking everything via <span style="color: #0052CC">Jira</span>. I participated in various meetings of different departments with senior leadership, and I also completed <b>The Data Processing and Analytics Course</b> covering <span style="color: #4DABCF">NumPy</span> and <span style="color: #150458">Pandas</span>.<br><br>Visit their website: <span style="color: #00E5FF">open atlantic.link</span>`,            "techtonnik.txt": `<b><span class="font-bold text-[#5555FF]">Software Engineer Intern</span></br><span class="text-[#ff8a00]">Techtonnik</span></br>Jun 2023 – Oct 2023</b></br></br>The main work was on the Admin Panel using <span style="color: #61DAFB">React</span>, <span style="color: #3178C6">TypeScript</span>, <span style="color: #339933">Node.js</span>, and <b>Express</b> with a <span style="color: #336791">PostgreSQL</span> database designed from scratch. I also worked on smaller <b>full-stack Web Applications</b> that were deployed to production using <span style="color: #2496ED">Docker</span>. I participated in regular weekly company meetings.</br></br>Visit their website: <span style="color: #00E5FF">open techtonnik.link</span>`,
            "freelance.txt": `<b><span class="font-bold text-[#5555FF]">Freelance Software Developer</span></br><span class="text-[#ff8a00]">Remote</span></br>Aug 2022 – Present</b></br></br>I created <b>CRUD Applications</b> for various clients, including a <b>US-based Logistics Company</b> where I created a tracking dashboard using <span style="color: #42b883">Vue.js</span> and <span style="color: #1976D2">Quasar</span>. Another project worth mentioning is the admin panel for the <b>Balkan Cultural Center</b>, which was built with <span style="color: #61DAFB">React</span>, <span style="color: #3178C6">TypeScript</span>, and <span style="color: #764ABC">RTK Query</span>. I also worked on smaller projects such as websites for various newspapers, interior design firms and websites for lawyers. I worked in smaller teams, and managed tasks and sprints through <span style="color: #0052CC">Jira</span>.`,
        },
        dirs: []
    },
    "~/Projects": {
        files: {
            "c_learn.txt": `<b><span class="font-bold text-[#5555FF]">C Learn</span></br><span class="text-[#ff8a00]">Personal Project</span></b></br></br>Built a <b>Machine Learning Framework</b> from scratch in pure <span style="color: #A8B9CC">C</span> with no external dependencies. The framework includes:</br>- Linear Regression (normal equation)</br>- Logistic Regression (SGD)</br>- SGD Regression with L1, L2, ElasticNet</br>- Data scaling (MinMax, Standardization, Mean Normalization)</br>- Polynomial feature expansion</br>- Train/test split</br>- Custom Matrix, Vector, and PRNG implementations</br>- Neural Network with custom Dense layers</br></br>Visit GitHub: <span style="color: #00E5FF">open c-learn.link</span>`,
        },
        dirs: []
    },
    "~/Skills": {
        files: {
            "programming_languages.txt": `<span style="color: #A8B9CC">C</span> <span style="color: #3776AB">Python</span> <span style="color: #ED8B00">Java</span> <span style="color: #3178C6">TypeScript</span> <span style="color: #00758F">SQL</span>`,
            "web.txt": `<span style="color: #61DAFB">React</span> <b>Next.js</b> <span style="color: #42b883">Vue.js</span> <span style="color: #339933">Node.js</span> <b>Express</b>`,
            "ml_dl.txt": `<span style="color: #F89A36">scikit-learn</span> <span style="color: #4DABCF">NumPy</span> <span style="color: #150458">Pandas</span>`,
            "tools.txt": `<span style="color: #2496ED">Docker</span> <span style="color: #336791">PostgreSQL</span> <span style="color: #0052CC">Jira</span> <span style="color: #F05033">Git</span>`,
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
                } else if (currentPath === "~/Experience" && arg === "logistiq.link") {
                    window.open("https://logistiqconsulting.com/", "_blank");
                    addOutput(
                        <div>
                            <span className="text-[#39FF14]">{prompt}</span>{input}<br/>
                            Opening Logistiq website...
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
                    window.open("https://github.com/Borisflashdev/c-learn", "_blank");
                    addOutput(
                        <div>
                            <span className="text-[#39FF14]">{prompt}</span>{input}<br/>
                            Opening C Learn GitHub repository...
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