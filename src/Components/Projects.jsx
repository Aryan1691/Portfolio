import styled from "styled-components";
import bg1 from "../assets/Card1.webp";
import bg2 from "../assets/Card2.webp";
import bg3 from "../assets/Card3.webp";
import bg4 from "../assets/Card4.webp";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  color: white;
  display: flex;
  justify-content: center;
  margin-top: -45px;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    padding: 10px;
  }
`;

const ListItems = styled.li`
  font-size: 89px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;

  position: relative;
  -webkit-text-stroke: 1px white;
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    z-index: -1;

    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    font-size: 76px;
    display: flex;
    // justify-content:center;
    // align-items:center;
  }
`;
const Right = styled.div`
  flex: 2;
  margin-left: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    margin-left: 0;
    margin-top: 20px;
  }
`;
const A = styled.a`
  color: transparent;
  -webkit-text-stroke: 1px white;

  :active {
    color: transparent;
  }
`;
const ImgWrapper = styled.div`
  width: 70%;
  position: relative;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
const Image = styled.img`
  width: 100%;
`;
const Projects = () => {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: "ease-in-out",
    delay: 100,
    anchorPlacement: "top-bottom",
    once: true,
  });
  const data = [
    {
      name: "DreamSoft",
      Link: "https://dreamsoft12.netlify.app/",
      img: bg1,
      id: 1,
    },
    { name: "Ximsa", Link: "https://ximsa.netlify.app/", img: bg2, id: 2 },
    {
      name: "Talkster",
      Link: "https://talkster.netlify.app/",
      img: bg3,
      id: 3,
    },
    { name: "Recippe", Link: "https://recippe.netlify.app/", img: bg4, id: 4 },
  ];

  const [hoveItemId, setHoverItemId] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const handleMouseEnter = (id) => {
    setHoverItemId(id);
  };
  const handleMouseLeave = () => {
    setHoverItemId(null);
  };

  return (
    <Section id="Project">
      <Container>
        <Left data-aos="fade-up">
          <List>
            {data.map((items) => {
              return (
                <>
                  <ListItems key={items.id} text={items.name}>
                    <A
                      key={items.id}
                      onMouseEnter={() => {
                        handleMouseEnter(items.id);
                      }}
                      onMouseLeave={handleMouseLeave}
                      href={items.Link}
                      target="_blank"
                    >
                      {items.name}
                    </A>
                  </ListItems>
                </>
              );
            })}
          </List>
        </Left>
        <Right>
          {data.map((item, index) => (
            <ImgWrapper
              key={index}
              visible={hoveItemId === item.id && imageLoaded}
            >
              {hoveItemId === item.id ? (
                <Image src={item.img} alt="images" onLoad={handleImageLoad} />
              ) : null}
            </ImgWrapper>
          ))}
        </Right>
      </Container>
    </Section>
  );
};

export default Projects;
