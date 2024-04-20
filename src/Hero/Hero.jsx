import Typed from "typed.js";
import styles from "../style";
import programming from "./Programming.gif";
import React from "react";
import { Github, Instagram, Linkedin } from "./social-media";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  const [isHoveredInstagram, setIsHoveredInstagram] = React.useState(false);
  const [isHoveredGithub, setIsHoveredGithub] = React.useState(false);
  const [isHoveredLinkedin, setIsHoveredLinkedin] = React.useState(false);

  const handleHoverInstagram = () => {
    setIsHoveredInstagram(!isHoveredInstagram);
  };
  const handlehoverGithub = () => {
    setIsHoveredGithub(!isHoveredGithub);
  };
  const handlehoverLinkedin = () => {
    setIsHoveredLinkedin(!isHoveredLinkedin);
  };

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Fullstack Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      typeSpeed: 50,
      loop: true,
      backDelay: 1500,
      backSpeed: 50,
      smartBackspace: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const [width, setWidth] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      // console.log(`Lebar Layar Baru: ${window.innerWidth}`); // Cetak log ke konsol
      if (window.innerWidth <= 620) {
        setWidth(true)
      } else {
        setWidth(false)
      }
    };
  
    window.addEventListener('resize', handleResize); // Tambahkan event listener 'resize'
    window.addEventListener('load', handleResize); 
  
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []); 
  

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} min-[1060px]:pt-32  mb-20 px-0 md:px-[3vw] max-[770px]:mt-10`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:pl-16 px-6 pr-0`}
      >
        <Fade direction="down">
          <div className="flex flex-row justify-between items-center w-full mb-5">
            <div className="flex-1 font-poppins font-semibold ss:text-[50px] text-[52px] text-white">
              <h2 className="h-auto">Hi There,</h2>
              <h2 className="max-[520px]:text-[45px]">
                I'm <span className="text-gradient">Cahya Winata</span>
              </h2>
              
              <h2 className="ss:text-[30px] max-[620px]:text-[40px]">
                I Am Into
                {width ? <br /> : null}
                <span className="text-gradient ml-3 max-[620px]:ml-0 max-[620px]:w-[100vw]" ref={el}></span>{" "}
              </h2>
            </div>
          </div>
        </Fade>

        <Fade direction="up">
          <a href="#about">
            <button
              type="button"
              className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[15px] outline-none ${styles} shadow-2xl shadow-blue-300 hover:bg-blue-400`}
            >
              About Me
            </button>
          </a>

          <section className="flex gap-3 mt-5">
            <div
              onClick= {() => window.open("https://www.instagram.com/cahyaw_nata/")}
              className="w-[45px] h-[45px] bg-[Rgb(9,1,27)] rounded-full items-center justify-center flex hover:bg-pink-500 transition cursor-pointer"
              onMouseEnter={handleHoverInstagram}
              onMouseLeave={handleHoverInstagram}
            >
              <Instagram isHovered={isHoveredInstagram} />
              <span className="hidden">Instagram</span>
            </div>
            <div
              onClick= {() => window.open("https://github.com/Cahyooo")}
              className="w-[45px] h-[45px] bg-[Rgb(9,1,27)] rounded-full items-center justify-center flex hover:bg-black transition cursor-pointer"
              onMouseEnter={handlehoverGithub}
              onMouseLeave={handlehoverGithub}
            >
              <Github isHovered={isHoveredGithub} />
              <span className="hidden">Github</span>
            </div>
            <div
              onClick= {() => window.open("https://www.linkedin.com/in/cahya-winata-65007129b/")}
              className="w-[45px] h-[45px] bg-[Rgb(9,1,27)] rounded-full items-center justify-center flex hover:bg-[#126BC4] transition cursor-pointer"
              onMouseEnter={handlehoverLinkedin}
              onMouseLeave={handlehoverLinkedin}
            >
              <Linkedin isHovered={isHoveredLinkedin} />
              <span className="hidden">Linkedin</span>
            </div>
          </section>
        </Fade>
      </div>

      <Fade direction="right">
        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img src={programming} alt="Programming"/>

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
