import '../../index.css';

const Help = () => {
    return (<>
        <div className="border-2 border-white h-[121px] p-2.5 text-base text-left overflow-y-auto no-scrollbar max-[930px]:h-[165px] max-[400px]:text-xs">
            <p>This site features a terminal-inspired interface, simulating a <a className="underline hover:text-[#00E5FF]" href="https://en.wikipedia.org/wiki/Command-line_interface">command-line</a> environment for navigating and interacting with files. Essential commands include:
                &lt;<span className="text-[#00E5FF]">ls</span>&gt; list files,
                &lt;<span className="text-[#00E5FF]">cd</span>&gt; enter directory,
                &lt;<span className="text-[#00E5FF]">cd ..</span>&gt; go back,
                &lt;<span className="text-[#00E5FF]">cat *.txt</span>&gt; read file,
                &lt;<span className="text-[#00E5FF]">clear</span>&gt; clear the terminal,
                &lt;<span className="text-[#00E5FF]">echo</span>&gt; print text,
                &lt;<span className="text-[#00E5FF]">sudo rm -rf /</span>&gt; do not try this one!
            </p>
        </div>
    </>);
}

export default Help;