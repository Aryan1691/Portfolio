// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import {HashLink} from 'react-router-hash-link'
import Navbar from "./Components/Navbar";
import HomeSection from "./Components/HomeSection";
import About from "./Components/About";
import Contacts from "./Components/Contacts";

import "./App.css";
import "./Styles/Loader.scss";
import "./Styles/HomeSection.scss";
import styled from "styled-components";
import Projects from "./Components/Projects";
import Loader from "./Components/Loader";

import { Suspense } from "react";

const Container = styled.div`
  height: 100vh;

  background: url("../src/assets/img.svg");

  background-repeat: no-repeat;
  background-size: cover;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
function App() {
  return (
    <>
      <Container>
        <Container>
          <Suspense fallback={<Loader />}>
            <Navbar />
            <HomeSection />
            <About />
            <Projects />
            <Contacts />
          </Suspense>
        </Container>
      </Container>
    </>
  );
}

export default App;
