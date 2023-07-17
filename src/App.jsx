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

import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <>
      <div className="Container1"
   
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
      </div>
    </>
  );
}

export default App;
