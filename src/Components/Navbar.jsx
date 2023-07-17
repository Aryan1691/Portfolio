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
  color: black;
  padding-left: 20px;
  font-size: 30px;
  font-weight: 1000;
  z-index: 999;
  background-clip: text;
  background: linear-gradient(30deg, #ffcb74, #ffcb74, white);
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
    to {
      background-position: 0% center;
    }
    from {
      background-position: -200% center;
    }
  }
`;
const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style-type: none;
  @media only screen and (max-width: 768px) {
 gap:35px;
 margin-right:30px;
  }
  @media (max-width: 375px) and (max-height: 667px) {
    gap:19px;
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
    margin-top: 9px;
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
  padding-block: 10px;
  padding-inline: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content:space-evenly;
    text-align:center;
  }
// `;


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
        {/* <Text1>AK</Text1> */}
        <List className="list">
          <ListItems onClick={activateItem("Home")} id="Home">
            <Link style={{ color: "black" }} to={"/"}>
              Home
            </Link>
          </ListItems>
          <ListItems onClick={activateItem("About")} id="About">
            <Link style={{ color: "black" }} to={"About"}>
              About
            </Link>
          </ListItems>
          <ListItems onClick={activateItem("Project")} id="Project">
            <Link style={{ color: "black" }} to={"Project"}>
              Project
            </Link>
          </ListItems>
          <ListItems onClick={activateItem("Contact")} id="Contact">
            <Link style={{ color: "black" }} to={"Contact"}>
              Contact
            </Link>
          </ListItems>
        </List>
      </Container>
    </Section>
  );
};

export default Navbar;
