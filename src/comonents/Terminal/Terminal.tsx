import './Terminal.css';
import {type JSX, useEffect, useRef, useState} from "react";

const fileSystem = {
    "~": {
        files: {
            "about_me.txt": `I'm a <b>Junior Software Developer</b> with over <b>two years of experience</b>. I have a good eye for detail, <b>strong problem-solving skills</b>, and am a <b>team player</b>.<br/><br/>I have a strong desire to <b>learn as much as possible</b> and become a <b>better Developer</b>. I am particularly passionate about <b>Data Science</b> and <b>Machine Learning</b> technologies and eager to expand my knowledge in these fields.<br/><br/>I have a lot of experience in <span style="color: #61DAFB">React</span>, <span style="color: #A8B9CC">C</span> and <span style="color: #3776AB">Python</span>.<br/>`,
            "general_intrests.txt": `Outside of programming, I’m highly interested in <b>Philosophy</b>, <b>Aviation</b>, <b>History</b>, reading books, watching movies and anime, as well as board games and similar hobbies.<br/><br/>I’m especially drawn to <b>Philosophy</b> — I’ve read many books related to <b>Nihilism</b> and <b>Stoicism</b>, as both perspectives strongly influence how I think and approach personal growth.<br/><br/><b>Aviation</b> is my second big passion. I plan to earn a <b>pilot license</b> one day, even if just for sports flying, simply because I genuinely love being in the air.`,
            "languages.txt": `<b>Serbian:</b> Native</br><b>English:</b> Professional working proficiency <b>(CEFR C1)</b>`
        },
        dirs: ["Education", "Experience", "Projects", "Skills"]
    },
    "~/Education": {
        files: {
            "high_school.txt": `<b><span class="dc">Electrical Engineering High School "Nikola Tesla"</span></br><span class="cw">High School Diploma, Electrical and Electronics Engineering</span></br>2020 - 2024</b></br></br>In school, I didn’t have the opportunity to work much with programming languages, aside from <span style="color: #A8B9CC">C</span> and <span style="color: #5E5C5C">Assembly</span>. Most of my development skills come from learning on my own — spending a lot of time privately studying both <b>frontend</b> and <b>backend</b> technologies.`,
            "university.txt": "<b><span class=\"dc\">Union University Faculty of Computing (RAF)</span></br><span class=\"cw\">Bachelor of Science - BS, Computer Science</span></br>2024 - Present</b></br></br>I enrolled in the <b>Natural Sciences and Mathematics program</b>, majoring in <b>Artificial Intelligence</b>, with a <b>scholarship</b> from two different companies. So far, I have completed courses in <b>Linear Algebra and Analytical Geometry</b>, <b>Calculus</b>, <b>Algorithms and Data Structures</b>, and an <b>Introduction to AI</b>.\n"
        },
        dirs: []
    },
    "~/Experience": {
        files: {
            "freelance.txt": `<b><span class="dc">Software Developer</span></br><span class="cw">Freelance</span></br>Nov 2022 - Present</b></br></br>Developed and delivered <b>diverse software and web solutions</b> for <b>international and regional clients</b>, including: <b>Web Administration Panel</b> for US-based Client, <b>Law Office Website</b>, <b>Admin Panel for Balkan Cultural Center</b>, <b>Custom Software & Management Systems</b>, and more.`,
            "atlantic_grupa.txt": `<b><span class="dc">Software Engineer Intern</span></br><span class="cw">Atlantic Grupa</span></br>Mar 2025 – Apr 2025</b></br></br>Gained hands-on experience with <b>company workflows</b>, <b>service desk operations</b> and completed a course in <b>Data Processing and Analytics</b>.`,
            "techtonnik.txt": `<b><span class="dc">Software Engineer Intern</span></br><span class="cw">Techtonnik</span></br>Jun 2023 – Oct 2023</b></br></br>Developed and designed <b>project-based Software, Websites, and Web Applications</b>. Attended weekly stand-up meetings to receive tasks and instructions for weekly goals.`
        },
        dirs: []
    },
    "~/Projects": {
        files: {
            "this_site.txt": `<span class="dc">Portfolio Website</span></br><span class="cw">Personal Project</span></br>Nov 2025</b></br></br>I created this website to showcase my <b>experience and skills</b>. The project is available on GitHub. I built it using <span style="color: #61DAFB">React</span>, <span style="color: #3178C6">TypeScript</span>, and <span style="color: #06B6D4">Tailwind CSS</span>.`
        },
        dirs: []
    },
    "~/Skills": {
        files: {
            "programming_languages.txt": `<span style="color: #F7DF1E">JavaScript</span> <span style="color: #3178C6">TypeScript</span> <span style="color: #3776AB">Python</span> <span style="color: #A8B9CC">C</span>`,
            "frontend.txt": `<span style="color: #61DAFB">React</span> <span style="color: #41B883">Vue</span>`,
            "backend.txt": `<span style="color: #339933">Node</span>`,
            "databases.txt": `<span style="color: #00758F">MySQL</span> <span style="color: #336791">PostgreSQL</span> <span style="color: #47A248">MongoDB</span>`,
            "data_science.txt": `<span style="color: #150458">Pandas</span> <span style="color: #4DABCF">NumPy</span>`,
            "tools.txt": `<span style="color: #0052CC">Jira</span> <span style="color: #F05033">Git</span> <span style="color: #181717">GitHub</span>`,
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
    const main = useRef<HTMLDivElement | null>(null);

    const getPrompt = () => `guest@bm11.dev:${currentPath}${currentPath === "~" ? "" : currentPath === "~/Projects" ? " " : ""}$ `;

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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const current = fileSystem[currentPath];
        const files = Object.keys(current.files).join(" ");
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const dirs = current.dirs.map(d => `<span class="dc">${d}</span>/`).join(" ");
        const content = [files, dirs].filter(Boolean).join(" ");

        addOutput(<div><span className="gc">{getPrompt()}</span>{input}<br/><span dangerouslySetInnerHTML={{__html: content}}/><br/></div>);
    };

    const handleCat = (filename: string) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const current = fileSystem[currentPath];

        if (current.files[filename]) {
            addOutput(
                <div>
                    <span className="gc">{getPrompt()}</span>{input}<br/>
                    <span dangerouslySetInnerHTML={{__html: current.files[filename]}}/>
                </div>
            );
        } else {
            addOutput(
                <div>
                    <span className="gc">{getPrompt()}</span>{input}<br/>
                    {input}: No such <span className="cw">file</span> or <span className="cw">directory</span>
                </div>
            );
        }
    };

    const handleCd = (dirname: string) => {
        if (dirname === "..") {
            if (currentPath !== "~") {
                setCurrentPath("~");
            }
            addOutput(<div><span className="gc">{getPrompt()}</span>{input}<br/></div>);
        } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const current = fileSystem[currentPath];
            if (current.dirs.includes(dirname)) {
                setCurrentPath(`~/${dirname}`);
                addOutput(<div><span className="gc">{getPrompt()}</span>{input}<br/></div>);
            } else {
                addOutput(
                    <div>
                        <span className="gc">{getPrompt()}</span>{input}<br/>
                        {input}: No such <span className="cw">file</span> or <span className="cw">directory</span>
                    </div>
                );
            }
        }
    };

    const handleEcho = () => {
        const text = input.trim().substring(input.trim().indexOf(" ") + 1);
        addOutput(
            <div>
                <span className="gc">{getPrompt()}</span>{input}<br/>
                {text}
            </div>
        );
    };

    const handleCommand = () => {
        const trimmed = input.trim();
        const prompt = getPrompt();

        if (trimmed === "") {
            addOutput(<div><span className="gc">{prompt}</span><br/></div>);
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
                            <span className="gc">{prompt}</span>{input}<br/>
                            Permission denied: You are not allowed to run this <span className="cw">command</span>
                        </div>
                    );
                }
                break;
            default:
                addOutput(
                    <div>
                        <span className="gc">{prompt}</span>{input}<br/>
                        {trimmed}: <span className="cw">command</span> not found
                    </div>
                );
        }
    };

    return (
        <div className="main-terminal" ref={main}>
            <div className="terminal">
                {output}
            </div>
            <div className="input-line">
                <span className="gc prompt">{getPrompt()}</span>
                <input
                    className="flex-1"
                    type="text"
                    value={input}
                    ref={ref}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            handleCommand();
                            setInput("");
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Terminal;