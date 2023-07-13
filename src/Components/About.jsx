/* eslint-disable react/no-unescaped-entities */
import styled, { createGlobalStyle } from "styled-components";
import bg from "../assets/me.webp";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  color: white;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding-inline: 7%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-top: 0;
  }

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
`;

const Title = styled.h1`
  font-size: 74px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

const Desc = styled.div`
  font-size: 19px;
  color: lightgrey;
  word-spacing: 1px;
  letter-spacing: 2px;
  margin-top: 10px;
  font-family: "Varela Round", sans-serif;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    padding-inline: 5px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  margin: auto;
  flex-direction: column;
`;

const Img = styled.img`
  width: 400px;
  object-fit: contain;
  position: relative;
  top: -40px;
  left: -50px;
  right: 0px;
  bottom: 0;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
  @media only screen and (max-width: 768px) {
    top: 0;
    left: 0;
    width: 300px;
  }
`;

const ColoredText = styled.span`
  color: ${({ color }) => color};
  font-weight: 700;
`;

const About = () => {
  return (
    <Section>
      <GlobalStyle />
      <Container>
        <Left>
          <Img src={bg} />
        </Left>
        <Right>
          <Title>Aryan Khatik</Title>
          <Desc>
            Oh, I've just successfully completed the esteemed FSD course at the
            Upgrad campus. As a highly skilled frontend developer, I possess a
            profound mastery of the ever-essential languages of{" "}
            <ColoredText color="#f7df1e">HTML5</ColoredText>,{" "}
            <ColoredText color="#f7df1e">CSS3</ColoredText>, and{" "}
            <ColoredText color="#f7df1e">JavaScript</ColoredText>.
            <Desc>
              {" "}
              On top of that, I effortlessly navigate the realms of{" "}
              <ColoredText color="#61DAFB">React.js</ColoredText>,{" "}
              <ColoredText color="#61DAFB">Next.js</ColoredText>, and even
              dabble in the trendy waters of
              <ColoredText color="#61DAFB"> Tailwind CSS.</ColoredText>
            </Desc>
            <Desc>
              But wait, there's more! I'm also well-versed in the art of{" "}
              <ColoredText color="#F08080">Material UI</ColoredText>,
              <ColoredText color="#F08080">BootStrap</ColoredText>, and have
              even tamed the powers of{" "}
              <ColoredText color="#F08080">Node.js</ColoredText>. Because, you
              know, frontend development is a walk in the park... or should I
              say, a rocket science playground?.
            </Desc>
          </Desc>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
