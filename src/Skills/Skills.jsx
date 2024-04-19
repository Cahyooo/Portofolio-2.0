import styles from "../style";
import ComputerCode from "./computer-code";

import { skills } from "../constants";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <section id="skill" className={`${styles.paddingY} text-white`}>
      <Fade direction="down">
        <div className="flex justify-center items-center text-gradient-skill text-[40px] font-bold max-[460px]:text-[35px]">
          <ComputerCode /> Skills and Ablities
        </div>
      </Fade>
      <article
        className={`${styles.flexCenter} ${styles.marginY} sm:py-16 py-6 mx-[7vw] max-[850px]:mx-[4vw] max-[460px]:mx-0 flex flex-wrap gap-5 bg-black-gradient-2 rounded-[20px] box-shadow max-[992px]: px-[1vw] skills`}
      >
        {skills.map((skill, index) => {
          return (
            <Fade key={index} direction="down">
            <div
              key={index}
              className="bg-[#05001F] w-[180px] h-[140px] flex flex-col justify-center items-center rounded-[20px] hover:bg-black transition shadow-lg shadow-black max-[900px]:w-[150px] max-[900px]:h-[110px] max-[460px]:w-[110px] max-[460px]:h-[90px] hover:scale-110 duration-500"
            >
              <img
                src={`./public/img-skills/${skill.link}`}
                alt={skill.link}
                className="h-[70px] max-[900px]:h-[60px] max-[460px]:h-[40px]"
              />
              <p className="text-xl max-[460px]:text-base font-poppins">
                {skill.skill}
              </p>
            </div>
            </Fade>
          );
        })}
      </article>
    </section>
  );
};

export default Skills;
