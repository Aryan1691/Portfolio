import styled from "styled-components";
import name from "../assets/name.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  z-index:9;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const Logo = styled.img`
  width: 15%;
  margin-right: 550px;
`;

const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style-type: none;
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
  }
  &.active:before {
    transform: scale(1);
    background-color: purple;

  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  background: url("../src/assets/img.svg");
  background-position: 10% -114%;
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
        <Links>
          <Logo src={name} />
          <List className="list">
            <ListItems onClick={activateItem("Home")} id="Home">
              Home
            </ListItems>
            <ListItems onClick={activateItem("About")} id="About">
              About
            </ListItems>
            {/* <ListItems onClick={activateItem("Certificates")} id="Certificates">
              Certificates
            </ListItems> */}
            <ListItems onClick={activateItem("Project")} id="Project">
              Project
            </ListItems>
            <ListItems onClick={activateItem("Contact")} id="Contact">
              Contact
            </ListItems>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
