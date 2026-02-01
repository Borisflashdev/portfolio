import portfolioImage from "../../../public/portfolio.png";

const Portfolio = () => {

    const handleContextMenu = (e) => {
        e.preventDefault(); // blokira desni klik
    };

    return (<>
        <div className="hidden md:flex text-sm mb-5 justify-center max-[930px]:text-[9px] max-[410px]:text-[5px]">
                <pre>
                    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ <br/>
                    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗<br/>
                    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║<br/>
                    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║<br/>
                    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝<br/>
                    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ <br/>
                </pre>
        </div>
        <div className="flex md:hidden justify-center mb-5 select-none" onContextMenu={handleContextMenu}>
            <img
                src={portfolioImage}
                alt="Portfolio"
                draggable="false"
                className="w-full max-w-[500px] pointer-events-none"
            />
        </div>
    </>);
}

export default Portfolio;