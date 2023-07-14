import styled from "styled-components";
import name from "../assets/name.webp";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  z-index:9;
  @media only screen and (max-width:768px){
    width:100%;
  }
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
  @media only screen and (max-width:768px){
    width:50%;
    margin-right:200px;
    }
    @media only screen and (max-width:768px){
      display:none;
    }
`;

const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style-type: none;
  @media only screen and (max-width:768px){
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
  position: relative;
  z-index:1;
  width: 100%;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  @media only screen and (max-width:768px){
    width:100%;
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
const upward = ()=>{
  window.scrollTo({ top:600, behavior: 'smooth' });

}
  return (
    <Section>
      <Container>
        <Links>
          <Logo onClick={upward} src={name} />
          <List  className="list">
            <ListItems onClick={activateItem("Home")} id="Home" >
             <Link style={{color:"white"}} to={"/"} >Home</Link> 
            </ListItems>
            <ListItems onClick={activateItem("About")} id="About">
             <Link style={{color:"white"}} to={"About"}>About</Link> 
            </ListItems>
            <ListItems onClick={activateItem("Project")} id="Project">
             <Link style={{color:"white"}} to={"Project"}>Project</Link> 
            </ListItems>
            <ListItems  onClick={activateItem("Contact")} id="Contact">
              <Link style={{color:"white"}} to={"Contact"}>Contact</Link>
            </ListItems>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
