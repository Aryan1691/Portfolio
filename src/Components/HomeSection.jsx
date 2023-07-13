import styled from "styled-components";
import Navbar from "./Navbar";
import bg from "../assets/line.webp";
import photo from "../assets/photo.webp";
import line from "../assets/line.webp";
import { TypeAnimation } from "react-type-animation";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  color: white;
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
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 7%;
  padding-block: 10%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-item: center;
    text-align: center;
    justify-content: center;
    // margin-top: -100px;
    padding-inline: 0;
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
  font-size: 74px;
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
`;
const Subtitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: lightblue;
`;
const Desc = styled.div`
  font-size: 24px;
  color: lightgrey;
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
  width: 500px;
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
    width: 400px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    position: relative;
  }
`;
const HomeSection = () => {
  return (
    <Section>
      <Navbar />
      <div id="Home"></div>
      <Container>
        <Left src={bg}>
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
        </Left>
        <Right>
          <Img src={photo} />
        </Right>
      </Container>
    </Section>
  );
};

export default HomeSection;
