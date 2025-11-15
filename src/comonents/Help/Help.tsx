import './Help.css';

const Help = () => {
    return (<>
        <div className="main-help">
            <p>This is my portfolio site, created to showcase my skills and built entirely by me using
                <span style={{color: '#61DBFB'}}> React.js</span> +
                <span style={{color: '#3178c6'}}> TypeScript</span> +
                <span style={{color: '#3B82F6'}}> Tailwind CSS</span>. The site is styled like a terminal, which is a <a href="https://microsoft.github.io/WhatTheHack/020-LinuxFundamentals/Student/resources/commands.html" className="a-cl">command-line</a>
                &nbsp;interface where you type commands to navigate and view files.
                These are the essential to get started:
                &lt;<span className="mc">ls</span>&gt; list files,
                &lt;<span className="mc">cd</span>&gt; enter directory,
                &lt;<span className="mc">cd ..</span>&gt; go back,
                &lt;<span className="mc">cat</span>&gt; read file,
                &lt;<span className="mc">clear</span>&gt; clear the terminal.</p>
        </div>
    </>)
}

export default Help;