import styles from "./style";
import {
  Footer,
  Navbar,
  Hero,
} from "./components";
import About from "./About/About";
import Skills from "./Skills/Skills";
import { logo } from "./assets";
import Project from "./Project/Project";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <a href="#home" className="">
      <img
        src={logo}
        alt="Logo Cahya"
        className="w-[150px] h-[152px] fixed top-[-35px] left-10 z-[51] max-[770px]:left-1"
      />
    </a>
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
