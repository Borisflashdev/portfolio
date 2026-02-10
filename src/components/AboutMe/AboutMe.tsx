
const AboutMe = () => {
    return (
        <>
            <div className="border-2 border-white py-2.5 px-3 text-lg w-[320px] justify-self-center max-[375px]:w-[260px]">
                <div>
                    <p className="text-[#00E5FF]"><b>Boris Mirkovic</b></p>
                    <p>Software Developer</p>
                    <div className="flex justify-center">
                        <img src="/character_blue.gif" alt="Boris Coding" className="w-50" onContextMenu={(e) => e.preventDefault()} draggable={false} />
                    </div>
                    <div className="flex items-center text-center">
                        <hr className="flex-1 border-t-2 border-dashed" />
                        <span className="px-4">Contact</span>
                        <hr className="flex-1 border-t-2 border-dashed " />
                    </div>
                    <div className="flex flex-col items-start text-base w-full overflow-hidden">
                        <p className="flex w-full whitespace-nowrap overflow-hidden">
                            &lt;<span className="text-[#00E5FF] shrink-0">Location</span>&gt; <a
                            href="https://maps.app.goo.gl/4wJ5JahntsGnpxWC7" className="hover:text-[#00E5FF] hover:underline ml-1 truncate">Belgrade, Serbia</a>
                        </p>
                        <p className="flex w-full whitespace-nowrap overflow-hidden">
                            &lt;<span className="text-[#00E5FF] shrink-0">Email</span>&gt; <a href="https://mail.google.com/mail/?view=cm&fs=1&to=borismirkovic11@gmail.com" className="hover:text-[#00E5FF] hover:underline ml-1 truncate">borismirkovic11@gmail.com</a>
                        </p>
                        <p className="flex w-full whitespace-nowrap overflow-hidden">
                            &lt;<span className="text-[#00E5FF] shrink-0">Linkedin</span>&gt; <a href="https://www.linkedin.com/in/boris-mirkovic/" className="hover:text-[#00E5FF] hover:underline ml-1 truncate">in/boris-mirkovic/</a>
                        </p>
                        <p className="flex w-full whitespace-nowrap overflow-hidden">
                            &lt;<span className="text-[#00E5FF] shrink-0">Github</span>&gt; <a href="https://github.com/Borisflashdev" className="hover:text-[#00E5FF] hover:underline ml-1 truncate">Borisflashdev</a>
                        </p>
                        <p className="flex w-full whitespace-nowrap overflow-hidden">
                            &lt;<span className="text-[#00E5FF] shrink-0">Resume</span>&gt; <a href="/resume.pdf" className="hover:text-[#00E5FF] hover:underline ml-1 truncate">download</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;