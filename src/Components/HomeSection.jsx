import styled from "styled-components";
import bg from "../assets/line.webp";
import photo from "../assets/photo1.webp";
import line from "../assets/line.webp";
import { TypeAnimation } from "react-type-animation";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { AiOutlineFilePdf } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
   margin-top: -110px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 7%;
  padding-block: 10%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding-inline: 0;
    margin-top: 120px;

    /* Default rule for all dimensions within max-width of 768px */

    /* Add a new rule for iPhone SE */
    @media (max-width: 375px) and (max-height: 667px) {
      margin-top: 150px;
    }
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    text-align: center;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-size: 70px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    display: flex;
    text-align: center;
    font-size: 50px;
  }
`;
const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f6f6f6;
`;
const Subtitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: #ffcb74;
`;
const Desc = styled.div`
  font-size: 24px;
  color: grey;
  word-spacing: 1px;
  letter-spacing: 2px;
  @media only screen and (max-width: 768px) {
    padding-inline: 10px;
  }
`;
const Line = styled.img`
  height: 5px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    display: flex;
    align-items: center;
    margin-top: -100px;
  }
`;
const Img = styled.img`
  width: 280px;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
  @media only screen and (max-width: 768px) {
    width: 280px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    position: relative;
  }
`;
const Docs = styled.div`
  color: white;
  z-index: 999;
  display: flex;
  font-size: 30px;
  padding-top: 20px;
  gap: 40px;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  transition: 0.25s;

  &:hover {
    color: #ffcb74;
  }
`;
const HomeSection = () => {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: "ease-in-out",
    delay: 100,
    anchorPlacement: "top-bottom",
    once: true,
  });
  return (
    <Section>
      <Container>
        <Left src={bg} data-aos="fade-left">
          <Title>Think. Make. Solve.</Title>
          <WhatIDo>
            <Line src={line} />
            <Subtitle>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Designer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </Subtitle>
          </WhatIDo>
          <Desc>
            I enjoy creating delightful,human-centered digital experiences.
          </Desc>
          <Docs>
            <A
              href="https://github.com/aryan1691"
              rel="noreferrer"
              target="_blank"
            >
              <IoLogoGithub />
            </A>
            <A
              href="https://www.instagram.com/aryan_1691/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <IoLogoInstagram />
            </A>
            <A
              href="https://www.linkedin.com/in/aryan-khatik-2467a4253/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <IoLogoLinkedin />
            </A>
            <A
              href="https://drive.google.com/file/d/1JLT4DMwMfrroDGFaTS9pzigJYmMYeYYe/view?usp=drive_link"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <AiOutlineFilePdf />
            </A>
          </Docs>
        </Left>

        <Right data-aos="fade-right">
          <Img src={photo} />
        </Right>
      </Container>
    </Section>
  );
};

export default HomeSection;
