import './Help.css';

const Help = () => {
    return (<>
        <div className="main-help">
            <p>This site features a terminal-inspired interface, simulating a <a className="a-cl" href="https://linux-commands.labex.io/">command-line</a> environment for navigating and interacting with files. Essential commands include:
                &lt;<span className="mc">ls</span>&gt; list files,
                &lt;<span className="mc">cd</span>&gt; enter directory,
                &lt;<span className="mc">cd ..</span>&gt; go back,
                &lt;<span className="mc">cat *.txt</span>&gt; read file,
                &lt;<span className="mc">clear</span>&gt; clear the terminal,
                &lt;<span className="mc">echo</span>&gt; print text,
                &lt;<span className="mc">sudo rm -rf /</span>&gt; do not try this one!
            </p>
        </div>
    </>)
}

export default Help;