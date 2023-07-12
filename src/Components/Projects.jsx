import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  color: white;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  margin-top: 100px;
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
`;
const Right = styled.div`
  flex: 1;
`;
const A = styled.a`
  color: transparent;
  -webkit-text-stroke: 1px white;

  :active {
    color: transparent;
  }
`;

const Projects = () => {
  const data = [
    { name: "DreamSoft", Link: "https://dreamsoft12.netlify.app/" },
    { name: "Ximsa", Link: "https://ximsa.netlify.app/" },
    { name: "Talkster", Link: "https://talkster.netlify.app/" },
    { name: "Recippe", Link: "https://recippe.netlify.app/" },
  ];
  return (
    <Section id="Project">
      <Container>
        <Left>
          <List>
            {data.map((items, index) => {
              return (
                <>
                  <ListItems key={index} text={items.name}>
                    <A href={items.Link} target="_blank">
                      {items.name}
                    </A>
                  </ListItems>
                </>
              );
            })}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Projects;
