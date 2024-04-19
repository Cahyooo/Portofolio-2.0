import { Fade } from "react-awesome-reveal";
import { Projects } from "../constants";
import GithubSVG from "./githubSVG";
import ProjectSVG from "./projectSVG";

const Project = () => {
  return (
    <section id="project" className="text-white flex flex-col gap-20">
        <h1 className="text-gradient-project font-bold text-[40px] flex self-center"><ProjectSVG />My Projects</h1>

      {Projects.map((project, index) => {
        let flexArea;
        let margin;
        let fadeDirection;
        let padding;
        if (index % 2 == 0) {
          flexArea = "flex-row";
          margin = "ml-7";
          fadeDirection = "right";
          padding = "";
        } else {
          flexArea = "flex-row-reverse";
          fadeDirection = "left";
          margin = "";
          padding = "pr-10";
        }

        return (
          <Fade direction={fadeDirection} key={index}>
            <article key={index} className={`flex ${flexArea} font-poppins`}>
              <img src={project.img} alt="" className="w-[65%] rounded-xl" />
              <div className={`justify-start flex-1 ${margin} ${padding} `}>
                <h1 className="font-bold text-[25px]">{project.title}</h1>
                <h2 className="text-[20px] font-semibold mb-2">
                  {project.technologies}
                </h2>
                <p className="text-justify mb-5">{project.description}</p>

                <a href={project.code}>
                  <button className="bg-gray-100 hover:bg-gray-300 transition text-black flex justify-center items-center font-bold px-2 rounded-lg py-1 gap-1">
                    <GithubSVG />
                    Github Code
                  </button>
                </a>
              </div>
            </article>
          </Fade>
        );
      })}
    </section>
  );
};

export default Project;
