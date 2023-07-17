import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  z-index: 9;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Text = styled.div`
  
  color: white;
  padding-left: 20px;
  font-size: 30px;
  font-weight: 1000;
  z-index: 999;
  background-clip: text;
  background: linear-gradient(30deg,  #ffcb74,#ffcb74,white);
  -webkit-background-clip: text;
  color: transparent;
  animation-name: back;
animation-duration: 3s;
animation-timing-function: linear;
animation-iteration-count: infinite;
background-size: 200% 200%;

 
  @media only screen and (max-width: 768px) {
    width: 50%;
    margin-right: 200px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @keyframes back {
    
    to{
        background-position: 0% center;

    }
    from{
        background-position: -200% center;
    }
  }
`;
const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style-type: none;
  @media only screen and (max-width: 768px) {
    // flex-direction: column;
    // position: absolute;
    // width:100%;
    // background-color:blue;
    // padding: 10px;
    // margin-top: 300px;
    // justify-content: flex-start;
    // align-items: center;
    // border: 2px solid black;
    // right: 0;
  }
`;

const ListItems = styled.li`
  font-size: 1.3em;
  cursor: pointer;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 3px;
    margin-top: 7px;
    top: 20px;
    position: absolute;
    background-color: white;
    z-index: 999;
    transform: scale(0);
    transition: transform 0.3s;
  }
  :hover::before {
    transform: scale(1);
    border-radius: 20px;
  }
  &.active:before {
    transform: scale(1);
    background-color: #ffcb74;
    border-radius: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
  padding-block:10px;
  padding-inline: 20px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Navbar = () => {
  const activateItem = (id) => () => {
    const all = document.querySelectorAll(".list li");

    for (let i = 0; i < all.length; i++) {
      if (all[i].id === id) {
        all[i].classList.add("active");
      } else {
        all[i].classList.remove("active");
      }
    }
  };

  return (
    <Section>
      <Container>
        <Text>Portfolio</Text>
        <List className="list">
          <ListItems onClick={activateItem("Home")} id="Home">
            <Link style={{ color: "white" }} to={"/"}>
              Home
            </Link>
          </ListItems>
          <ListItems onClick={activateItem("About")} id="About">
            <Link style={{ color: "white" }} to={"About"}>
              About
            </Link>
          </ListItems>
          <ListItems onClick={activateItem("Project")} id="Project">
            <Link style={{ color: "white" }} to={"Project"}>
              Project
            </Link>
          </ListItems>
          <ListItems onClick={activateItem("Contact")} id="Contact">
            <Link style={{ color: "white" }} to={"Contact"}>
              Contact
            </Link>
          </ListItems>
        </List>
      </Container>
    </Section>
  );
};

export default Navbar;
