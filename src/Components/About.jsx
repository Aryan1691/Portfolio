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
            I’m Aryan Khatik, a skilled web development professional with
            expertise in responsive user interfaces, bug resolution, and project
            management. I played a key role in developing **"Brocus"**,
            showcasing both technical and leadership abilities. While with
            Madtech Solutions, I was assigned to **St. Lawrence School** for two
            months to teach HTML, CSS, and JavaScript, guide students in
            creating basic web projects, and enhance the school's web
            application. Later, at **Programming.com**, I contributed to the
            **Recruitment.AI** project by managing issues, designing technical
            training sessions, and fostering a collaborative environment. I hold
            certifications in **Full Stack Development** and **Advanced
            JavaScript** from Upgrad, and **Responsive Web Design** from
            FreeCodeCamp, strengthening my expertise in building robust web
            applications.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
