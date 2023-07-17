/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import "../styles/About.scss";
import bg from "../assets/me2.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
      anchorPlacement: "top-bottom",
      once: true,
    });
  }, []);

  return (
    <section className="Section">
      <div className="Container">
        <div className="Left" data-aos="fade-up" data-aos-duration="1000">
          <img className="Img" src={bg} alt="Profile" />
        </div>
        <div className="Right" data-aos="fade-left" data-aos-duration="1100">
          <h1 className="Title" data-aos="fade-right" data-aos-duration="1000">
            ARYAN KHATIK{" "}
          </h1>
          <div className="Desc">
            I completed the esteemed FSD course at Upgrad, gaining expertise in
            HTML5, CSS3, and JavaScript. Proficient in React.js, Next.js,
            Tailwind CSS, and Material UI, I excel in frontend development. I've
            also mastered Node.js for server-side development. With a passion
            for pushing boundaries, frontend development is both a walk in the
            park and a thrilling rocket science playground for me.
          </div>
          {/* <div className="Desc">
            On top of that, I effortlessly navigate the realms of{" "}
            <span className="ColoredText ColoredText--blue">React.js</span>,{" "}
            <span className="ColoredText ColoredText--blue">Next.js</span>, and
            even dabble in the trendy waters of{" "}
            <span className="ColoredText ColoredText--blue">Tailwind CSS</span>.
          </div>
          <div className="Desc">
            But wait, there's more! I'm also well-versed in the art of{" "}
            <span className="ColoredText ColoredText--red">Material UI</span>,
            <span className="ColoredText ColoredText--red">Bootstrap</span>, and
            have even tamed the powers of{" "}
            <span className="ColoredText ColoredText--red">Node.js</span>.
            Because, you know, frontend development is a walk in the park... or
            should I say, a rocket science playground?.
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
