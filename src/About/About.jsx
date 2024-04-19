import styles, { layout } from "../style";
import Person from "./person";
import Computer from "./Firmware.gif";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section
      id="about"
      className={`${styles.paddingY} max-[1000px]:px-0 text-white px-[5vw]`}
    >
      <Fade direction="down">
        <div className="flex items-center justify-center">
          <Person />
          <h1 className="text-gradient-about-me text-[40px] font-bold ml-3">
            About Me
          </h1>
        </div>
      </Fade>

      <div className="flex md:flex-row flex-col">
        <Fade direction="left">
          <div
            className={`flex-1 flex flex-row ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <img src={Computer} alt="Computer" />
            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div>
        </Fade>

        <article className="w-1/2 max-[1060px]:w-[90%] justify-center items-center m-auto font-poppins text-[17px] max-[440px]:text-[14px]">
          <Fade direction="right" cascade damping={0.1}>
            <h1 className="font-bold mb-1 text-[26px]">I'm Cahya Winata</h1>
            <h2 className="font-semibold mb-3 text-[22px]">
              Fullstack Developer
            </h2>
            <p className="text-justify mb-3">
              I am a Fullstack Developer in Indonesia. I've been doing web
              development since 2023. I am very passionate about improving my
              coding skills and learn new things. I build websites using Next JS
              as Frontend and Laravel as Backend.
            </p>
            <p className="mb-3 text-nowrap">
              <span className="text-blue-500">Email : </span>
              cahyawinata1212@gmail.com
            </p>
            <p className="text-nowrap">
              <span className="text-blue-500">Place : </span>Tanjungpinang,
              Indonesia
            </p>
          </Fade>
        </article>
      </div>
    </section>
  );
};

export default About;
