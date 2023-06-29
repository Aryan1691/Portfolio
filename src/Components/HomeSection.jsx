import styled from "styled-components";
import Navbar from "./Navbar";
import bg from "../assets/line.png";
import photo from "../assets/photo.png";
import line from "../assets/line.png";
import { TypeAnimation } from "react-type-animation";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  margin-top: 30px;
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  padding-inline: 7%;
  padding-block: 10%;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
`;
const Title = styled.h1`
  font-size: 74px;
  margin: 0;
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
`;
const Line = styled.img`
  height: 5px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
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
`;
const HomeSection = () => {
  return (
    <Section>
      <Navbar />
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
