import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Suspense } from "react";

import "./App.css";
import "./Styles/Loader.scss";
import "./Styles/HomeSection.scss";
import "./Styles/About.scss";
const LazyHomeSection = React.lazy(() => import("./Components/HomeSection"));
const LazyAbout = React.lazy(() => import("./Components/About"));
const LazyContacts = React.lazy(() => import("./Components/Contacts"));
const LazyProjects = React.lazy(() => import("./Components/Projects"));

import styled from "styled-components";
import Loader from "./Components/Loader";

import Navbar from "./Components/Navbar";

const Container = styled.div`
  height: 100vh;

  // scroll-snap-type: y mandatory;
  // scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
  overflow-x: hidden;
`;

function App() {
  return (
    <>
      <Container
        style={{
          background: "url(../src/assets/bgg.jpg)",
          backgroundRepeat: " no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <LazyHomeSection />
                </Suspense>
              }
            />
            <Route
              path="/About"
              element={
                <Suspense fallback={<Loader />}>
                  <LazyAbout />
                </Suspense>
              }
            />
            <Route
              path="/Project"
              element={
                <Suspense fallback={<Loader />}>
                  <LazyProjects />
                </Suspense>
              }
            />
            <Route
              path="/Contact"
              element={
                <Suspense fallback={<Loader />}>
                  <LazyContacts />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
