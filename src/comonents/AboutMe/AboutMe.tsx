import './AboutMe.css';
import '../../index.css';

const AboutMe = () => {
    return (
        <>
            <div className="main-div">
                <div>
                    <p className="mc"><b>Boris Mirkovic</b></p>
                    <p>Junior Software Developer</p>
                    <div className="flex justify-center">
                        <img src="/character.gif" alt="Boris Coding" className="w-50" onContextMenu={(e) => e.preventDefault()} draggable={false} />
                    </div>
                    <div className="flex items-center text-center">
                        <hr className="flex-1 border-t-2 border-dashed" />
                        <span className="px-4">Contact</span>
                        <hr className="flex-1 border-t-2 border-dashed " />
                    </div>
                    <div className="flex flex-col items-start text-box">
                        <p>
                            &lt;<span className="mc">Location</span>&gt; <a
                            href="https://maps.app.goo.gl/4wJ5JahntsGnpxWC7" className="link">Belgrade, Serbia</a>
                        </p>
                        <p>
                            &lt;<span className="mc">Email</span>&gt; <a href="https://mail.google.com/mail/?view=cm&fs=1&to=borismirkovic11@gmail.com" className="link">borismirkovic11@gmail.com</a>
                        </p>
                        <p>
                            &lt;<span className="mc">Linkedin</span>&gt; <a href="https://www.linkedin.com/in/boris-mirkovic/" className="link">in/boris-mirkovic/</a>
                        </p>
                        <p>
                            &lt;<span className="mc">Github</span>&gt; <a href="https://github.com/Borisflashdev" className="link">Borisflashdev</a>
                        </p>
                        <p>
                            &lt;<span className="mc">Resume</span>&gt; <a href="/resume.pdf" className="link">download</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe